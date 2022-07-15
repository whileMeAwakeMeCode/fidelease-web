import { Component } from "react";
import { section2, section3 } from "./constants";
import { Fade } from "react-reveal";
/* icons */
import { BsCalendar3, BsCreditCard2Front } from 'react-icons/bs';
import { MdOutlineBlurCircular, MdOutlinePhonelinkRing, MdOutlineVolunteerActivism } from 'react-icons/md';
import { AiFillPieChart, AiOutlineNotification } from 'react-icons/ai';
import { RiMoneyEuroCircleLine, RiTimerLine } from 'react-icons/ri';
import { BiTransfer } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import {TbCreditCardOff} from 'react-icons/tb';

/* images */
import mobileApp from './images/mobile_app_client2.png';
import fLogo from './images/squared_logo.png';
import fText from './images/fidelease_text.png';
import physicalCard from './images/physical_card_handed.png';
import newOffer from './images/new_offer.png';
import sticker from './images/sticker.png';
import customerFile from './images/customer_view.png';
import statisticsView from './images/statistics_view.png';
import numStatsView from './images/num_statistics_view.png';
import txsView from './images/txs_view.png';
import clientShopsList from './images/client_shops_list.png';
import { ItemRow } from "./ItemRow";
import Button from "./Button";
import { TiInfoLargeOutline } from "react-icons/ti";
import { smoothScroll } from "./utils";


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
                <div className='flex row allwidth height95 justifystart'>
                    <Fade left>  
                    
                        <div className='flex flexdot4 justifystart' style={{ height: '70vh'}}>
                            <div className='title flex text-shadow height90 justifystart'>
                                    <img alt='' className="img-shadow" src={fLogo} style={{ width: '5vw', height: 'auto', objectFit: 'contain' }} /> 
                                    {/* FIDELEASE */}
                                    <img alt='' src={fText} style={{ width: '10vw', height: 'auto', objectFit: 'contain' }} />
                                {/* <span className="primary">LICENCE CLIENT</span> */}
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
                                <div className='flex allwidth height80'>
                                    <div className="bordered marged-t allwidth soft-bg box-shadow">
                                        <div className="flex row allwidth" style={{borderBottom: '1px solid silver', paddingBottom: '1%'}}>
                                            <div className="flex flexdot4 bold">Options</div>
                                            <div className="flex flexdot3 bold" style={{borderRight: '1px solid silver', borderLeft: '1px solid silver'}}>Fidélisation classique</div>
                                            <div className="flex flexdot3 bold">Programme Fidelease</div>
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

                            <div className="flex allwidth marged-t justifyend">
                                {/* <button  onClick={() => smoothScroll(section3)}>En savoir plus</button> */}
                                <Button
                                    title="En savoir plus"
                                    icon={<TiInfoLargeOutline />}
                                    className="app-button marged-t xlarge"
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
                    <div className="flex bold smaller">
                        ÇA VA CHANGER AVEC 
                        <div className=""><img className="inverted-img" src={fText} style={{width: '15vw', height: 'auto', objectFit: 'contain'}}/></div>
                        <img alt='' src={clientShopsList} style={{ width: '15vw', height: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div className="flex width60">
                        {/* Terminé les portefeuilles gonflés de cartes de fidélité, on veut gonfler nos portefeuilles avec du pouvoir d'achat ! */}
                        <span className="xxlarge">Gonflez vos portefeuilles avec du pouvoir d'achat !</span>
                        <br /> 
                        pas avec des dixaines de cartes de fidélité dont l'offre est trop souvent similaire, sans surprise, tellement peu engageante qu'on en oublierait presque de la présenter au commerçant lors de notre passage en caisse !
                    </div>
                </div>
            </div>
        </div>

    }

}