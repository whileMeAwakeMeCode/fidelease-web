import { Component } from "react";
import { section2, section3 } from "./constants";
import { Fade } from "react-reveal";
/* icons */
import { BsCalendar3, BsCreditCard2Front } from 'react-icons/bs';
import { MdOutlineBlurCircular, MdOutlinePhonelinkRing, MdOutlineVolunteerActivism } from 'react-icons/md';
import { AiOutlineNotification } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import {TbCreditCardOff} from 'react-icons/tb';

/* images */
import mobileApp from './images/mobile_app_client2.png';
import fLogo from './images/squared_logo.png';
import fText from './images/fidelease_text.png';
import physicalCard from './images/physical_card_handed.png';
import clientShopsList from './images/client_shops_list.png';
import { ItemRow } from "./ItemRow";
import Button from "./Button";
import { TiInfoLargeOutline } from "react-icons/ti";
import { smoothScroll } from "./utils";
import Layout from "./Layout";

const { isSmallDevice } = Layout;


export default class ClientsView extends Component {
    state = {
        loaded : false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true})
        }, 1000)
    }
    render() {
        const {loaded} = this.state;
        return <div className="flex">
            <div className="flex screensize" ref={section2}>
                {/* <div className='flex row allwidth height95 justifystart'> */}
                <div className={`flex allwidth height95 ${isSmallDevice  ? '' : 'row justifystart'}`}>
                    <Fade left>  
                    
                        {
                            isSmallDevice
                            // ? <div className='title flex text-shadow height90 justifystart'>
                            //     <img alt='' className="img-shadow" src={fLogo} style={{ width: '15vw', height: 'auto', objectFit: 'contain' }} /> 
                            //     <img alt='' src={fText} style={{ width: '25vw', height: 'auto', objectFit: 'contain' }} />
                            // </div>
                            ? <div>
                                <Fade left>
                                    <img alt='' src={mobileApp} style={{ height: 'auto', width: '85vw', objectFit: 'contain', position: 'relative', left: '-7.5vw' }} />
                                </Fade>
                                {/* <Fade right when={loaded}>
                                    <img alt='' src={physicalCard} style={{ width: '70vw', height: 'auto', objectFit: 'contain', position: 'relative', right: '-16vw' }} />
                                </Fade> */}
                            </div>
                            
                            : <div className='flex flexdot4 justifystart' style={{ height: '70vh'}}>
                                <div className='title flex text-shadow height90 justifystart'>
                                        <img alt='' className="img-shadow" src={fLogo} style={{ width: '5vw', height: 'auto', objectFit: 'contain' }} /> 
                                        <img alt='' src={fText} style={{ width: '10vw', height: 'auto', objectFit: 'contain' }} />
                                </div>
                                <div className="flex flexdot6">
                                    <div className="justifystart alignstart">
                                        <Fade right when={loaded}>
                                            <img alt='' src={physicalCard} style={{ width: '20vw', height: 'auto', objectFit: 'contain', position: "absolute", right: '-5%', top: '25%' }} />
                                        </Fade>
                                    </div>
                                    <Fade left>
                                        <img alt='' src={mobileApp} style={{ height: '50vh', width: 'auto', objectFit: 'contain', position: "absolute", left: '-15%' }} />
                                    </Fade>
                                </div>
                            </div>
                        }
                    </Fade>
                    <Fade right>  
                        <div className='flex flexdot5 allheight padded1'>
                            <div className='flex title xxxlarge flexdot1'>
                                <div className="smaller">Une seule carte de fidélité pour plusieurs commerçes,</div>
                                <div className="smaller">Des offres et des promos diversifiées toute l'année,</div>
                                
                                <br />
                                <div>Profitez de la fidélisation 2.0 !</div>
                            </div>
                            <div className='flex flexdot9 justifystart allheight width95'>
                                {/* <ImMobile /> */}
                                {/* TABLE */}
                                <div className={`flex height80 ${Layout.isSmallDevice ? 'width90' : 'allwidth'}`}>
                                    <div className="bordered marged-t allwidth soft-bg box-shadow">
                                        <div className="flex row allwidth" style={{borderBottom: '1px solid silver', paddingBottom: '1%', fontSize: Layout.isSmallDevice ? 'x-small' : ''}}>
                                            <div className="flex flexdot6 bold">Options</div>
                                            <div className="flex flexdot2 bold" style={{borderRight: '1px solid silver', borderLeft: '1px solid silver'}}>Fidélisation classique</div>
                                            <div className="flex flexdot2 bold">Programme Fidelease</div>
                                        </div>

                                        {/* ItemRow */}
                                        {
                                            [
                                                { title: 'Carte Physiques', checks: [1,1], icon: <BsCreditCard2Front /> },
                                                { title: 'Carte Dématérialisées', checks: [0,1], icon: <MdOutlinePhonelinkRing /> },
                                                { title: 'Carte multi-commerces', checks: [0,1], icon: <MdOutlineBlurCircular /> },
                                                { title: 'Offres diversifiées', checks: [0,1], icon: <BsCalendar3 /> },
                                                { title: 'Promotions temporaires', checks: [0,1], icon: <MdOutlineVolunteerActivism /> },
                                                { title: "Point transférables", checks: [0,1], icon: <BiTransfer /> },
                                                { title: "Notifications nouvelle offre", checks: [0,1], icon: <AiOutlineNotification /> },
                                                { title: "Cartes oubliées créditables", checks: [0,1], icon: <TbCreditCardOff /> },
                                                
                                            ].map((item, itemi) => <ItemRow 
                                                keyValue={`prosview_item_${itemi}`} 
                                                {...item}    
                                            />)
                                        }
                                    </div>

                                </div>


                            </div>

                            {
                                isSmallDevice
                                && <div style={{marginTop: '5%'}}>
                                    <Fade right when={loaded}>
                                        <img alt='' src={physicalCard} style={{ width: '80vw', height: 'auto', objectFit: 'contain', position: 'relative', right: '-11vw' }} />
                                    </Fade>
                                </div>
                            }

                            <div className="flex allwidth marged-t justifyend">
                                {/* <button  onClick={() => smoothScroll(section3)}>En savoir plus</button> */}
                                <Button
                                    title="En savoir plus"
                                    icon={<TiInfoLargeOutline />}
                                    className={`app-button marged-t ${Layout.isSmallDevice ? 'large marged-b' : 'xlarge'}`}
                                    onClick={() => smoothScroll(section3)}
                                />
                            </div>
                        </div>
                        
                    </Fade>

                    
                
                </div>

            
            </div>

            {/* SECTION 3 */}
            <div className='flex screensize' ref={section3} style={{background: '#404040', color: '#fff', paddingTop: 20, paddingBottom: 40}}>
                <div className="flex allspace justifystart width80">
                    <div className="flexy title xxlarge"> Avouez-le, la plupart de vos cartes de fidélité n'ont pas une grande valeur à vos yeux...</div>
                    <div className={`flex bold ${isSmallDevice ? 'large marged-t' : 'smaller'}`}>
                        ÇA VA CHANGER AVEC 
                        <div className=""><img className="inverted-img" src={fText} style={{width: Layout.isSmallDevice ? '40vw' : '15vw', height: 'auto', objectFit: 'contain'}}/></div>
                        <img alt='' src={clientShopsList} style={{ width: Layout.isSmallDevice ? '70vw' : '15vw', height: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div className={`flex ${Layout.isSmallDevice ? 'width80' : 'width60'}`}>
                        {/* Terminé les portefeuilles gonflés de cartes de fidélité, on veut gonfler nos portefeuilles avec du pouvoir d'achat ! */}
                        <span className={Layout.isSmallDevice ? 'xlarge' : 'xxlarge'}>Gonflez vos portefeuilles avec du pouvoir d'achat !</span>
                        <br /> 
                        pas avec des dixaines de cartes de fidélité dont l'offre est trop souvent similaire, sans surprise, tellement peu engageante qu'on en oublierait presque de la présenter au commerçant lors de notre passage en caisse !
                    </div>
                </div>
            </div>
        </div>

    }

}