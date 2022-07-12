import { Component } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { QrReader } from 'react-qr-reader';
import Button from './Button';
import { secondary } from './constants';
import { fetchApi, isJSON, plural } from './utils';

export class Scanner extends Component {
    state = {
        scanning: true
    }

    async componentDidMount() {
        const { error, response, status } = await fetchApi({
            method: 'GET',
            route: 'COMPANIES_NAMES',
        });

        console.log('companiesNames', {error, response, status});

        this.setState({ scanning: true, companiesNames: response })
    }

    setData = async data => {

        try {
            const { card: scannedCard } = isJSON(data) || {};

            if (this.state.scanning && scannedCard && !this.state.fetchinBalance) {
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
                scannedCard && this.setState({ scannedCard, scannedCardBalances, scanning: false, fetchingBalances: false });
            }
        }catch(e) {
            this.setState({ scanning: false, scanError: true, fetchingBalances: false })
        }
    }

    render() {
        const { scanning, fetchingBalances, scanError, scannedCard, scannedCardBalances, companiesNames } = this.state;
        const cieIds = Object.keys(scannedCardBalances||{});
        
        return <div className='flex allheight whitebg justifystart'>
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
                    ? <div className="flex">
                        <BsShieldCheck color={secondary} />
                        Cette carte est valide
                        {
                            cieIds?.length
                            ? cieIds.map(cieId => <div className='allwidth flex row'><span className="title">{(companiesNames||{})[cieId]}</span> : {scannedCardBalances[cieId]} {plural(scannedCardBalances[cieId], 'point')}</div>)
                            : null
                        }
                    </div>
                    : <div style={{height: '25vh', width: '30vw'}}>
                        {
                            scanning
                            ? <QrReader
                                onResult={(result, error) => {
                                if (!!result) {
                                    this.setData(result?.text);
                                }
        
                                // if (!!error) {
                                //     console.info(error);
                                // }
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
                                    : null
                                )
                            )
                        }
                        
                    
        
                    </div>
                }
            

        </div>
    }
}