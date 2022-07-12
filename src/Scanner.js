import { Component } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { QrReader } from 'react-qr-reader';
import Button from './Button';
import { secondary } from './constants';
import { fetchApi, isJSON, isUuidV4, plural } from './utils';
import physicalCard from './images/physical_card.png';

export class Scanner extends Component {
    state = {
        scanning: true
    }

    async componentDidMount() {
        const { error, response, status } = await fetchApi({
            method: 'GET',
            route: 'MIN_COMPANIES',
        });

        console.log('minCies', {error, response, status});

        this.setState({ scanning: true, minCies: response })
    }

    setData = async data => {

        try {
            const { card: scannedCard } = isJSON(data) || {};
            console.log('scannedCard', scannedCard);
            if (this.state.scanning && scannedCard && !this.state.fetchinBalance && await isUuidV4(scannedCard)) {
                this.setState({ scanning: false, fetchingBalances: true })
                // get data about card with api request GET_UNCONFIRMED_BALANCE_OF
                const { response: scannedCardBalances, error, status } = await fetchApi({
                    method: 'POST',
                    route: 'GET_UNCONFIRMED_BALANCE_OF',
                    body: {
                        card: scannedCard
                    }
                });

                console.log('GET_UNCONFIRMED_BALANCE_OF', { scannedCardBalances, error, status })

                // ?
                scannedCard && this.setState({ scannedCard, scannedCardBalances, fetchingBalances: false });
            }
        }catch(e) {
            this.setState({ scanning: false, scanError: true, fetchingBalances: false })
        }
    }

    openCompanyDetails = (e) => {
        /* TODO */
        e.preventDefault();
    }

    render() {
        const { scanning, fetchingBalances, scanError, scannedCard, scannedCardBalances, minCies } = this.state;
        const cieIds = Object.keys(scannedCardBalances||{});
        console.log('scanning ?', scanning);
        return <div className='flex allheight whitebg justifystart padded1'>
            
            <div className='flexy row allwidth'>
                <img src={physicalCard} className="flex" style={{width: 'auto', height: '15vh', objectFit: 'contain'}} />

                <div className="flex">
                    <p className='title'>
                        {
                            scanError
                            ? 'ERREUR DE SCAN'
                            : (
                                scannedCard
                                ? `CARTE n°${scannedCard?.split('-')[0]}`
                                : 'SCANNEZ VOTRE CARTE DE FIDÉLITÉ'
                            )
                        }
                    </p>
                    {
                        scannedCard
                        ? <>
                            <BsShieldCheck color={secondary} />
                            Cette carte est valide
                        </>
                        : null
                    }
                    
                </div>
            </div>
            {
                    scannedCard
                    ? <div className="flex allwidth">
                        <div className="flexy row allwidth marged-t" style={{borderBottom: '1px solid silver', borderTop: '1px solid silver', paddingBottom: '1%'}}>
                            <div className="flex flexdot4 bold" style={{borderRight: '1px solid silver'}}>Commerçant</div>
                            <div className="flex flexdot4 bold">Votre solde</div>
                        </div>
                        <div className='flex allspace justifystart'>
                            {
                                cieIds?.length
                                ? cieIds.map((cieId, ciei) => <div key={`scanner_cie_${ciei}`} className='allwidth flexy row' style={{borderBottom: '1px solid silver'}}>
                                    <div className='flex flexdot5 allwidth' style={{borderRight: '1px solid silver'}}>
                                        <img
                                            src={(minCies||{})[cieId]?.logo}
                                            style={{
                                                height: '10vh', width: '10vw', objectFit: 'contain'
                                            }}
                                            className="clickable hoverscale"
                                            onClick={this.openCompanyDetails}
                                        />
                                        <span className="title">{(minCies||{})[cieId]?.name}</span>
                                    </div>
                                    <p className='flexy flexdot5 bold title'>{scannedCardBalances[cieId]} {plural(scannedCardBalances[cieId], 'point')}</p>
                                </div>)
                                : null
                            }
                        </div>
                    </div>
                    : <div style={{height: '25vh', width: '30vw'}}>
                        {
                            scanning
                            ? <QrReader
                                onResult={(result, error) => {
                                    if (!!result && !this.state.scannedCard) 
                                        this.setData(result?.text);
                                }}
                                style={{ width: '100%', height: '100%' }}
                            />
                            : (
                                fetchingBalances
                                ? <div className='flex'>
                                    <div className='rotating'>
                                        <AiOutlineLoading3Quarters />
                                    </div>
                                    Chargement de vos soldes
                                </div>
                                : (
                                    scanError
                                    ? <div className="error">
                                        <p>Il y a eu une erreur, scan impossible</p>
                                        <Button
                                            title="Recommencer"
                                            className="smaller"
                                            onClick={() => this.setState({ scanError: undefined, scanning: true })}
                                        />
                                    </div>
                                    : 'YEAH'
                                )
                            )
                        }
                        
                    
        
                    </div>
                }
            

        </div>
    }
}