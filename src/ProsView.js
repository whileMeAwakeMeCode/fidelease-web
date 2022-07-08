import { ImMobile } from "react-icons/im";
import { Fade } from "react-reveal";
import { BsCalendar3, BsCheckLg, BsCreditCard2Front } from 'react-icons/bs';
import { MdOutlineBlurCircular, MdOutlineClose, MdOutlinePhonelinkRing, MdOutlineVolunteerActivism } from 'react-icons/md';
import { AiFillPieChart, AiOutlineNotification } from 'react-icons/ai';
import { RiMoneyEuroCircleLine, RiTimerLine } from 'react-icons/ri';
import { BiTransfer } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { TiInfoLargeOutline } from 'react-icons/ti';
import mobileApp from './images/mobile_app.png';
import fLogo from './images/squared_logo.png';
import fText from './images/fidelease_text.png';
import physicalCard from './images/physical_card_handed.png';
import newOffer from './images/new_offer.png';
import sticker from './images/sticker.png';
import customerFile from './images/customer_view.png';
import statisticsView from './images/statistics_view.png';
import numStatsView from './images/num_statistics_view.png';
import {TbCreditCardOff} from 'react-icons/tb';
import txsView from './images/txs_view.png';




import { secondary, section3 } from "./constants";
import { smoothScroll } from './utils';
import Button from "./Button";


const Check = () => <BsCheckLg color={secondary} />
const Uncheck = () => <MdOutlineClose size={30} color='red' />

const ItemRow = ({
    title,
    icon,
    checks,
    key
}) => <div key={key} className="flex row allspace" style={{ height: '5vh'}}>
    <div className="flex row flexdot4 justifystart">{icon} &nbsp; { title }</div>
    <div className="flex flexdot3" style={{borderRight: '1px solid silver', borderLeft: '1px solid silver'}}>
        {
            checks[0]
            ? <Check />
            : <Uncheck />
        }
    </div>
    <div className="flex flexdot3">
        {
            checks[1]
            ? <Check />
            : <Uncheck />
        }
    </div>
</div>

/* SECTION 2 */
export default () => <div className="flex screensize">
    {/* note: screensize view must be child of a `padded` class */}
    <div className='screensize flex'>
    
        {/* <div className='title text-shadow selfstart'>
            <span className="primary flex"> <img className="img-shadow" src={fLogo} style={{ width: '3vw', height: 'auto', objectFit: 'contain' }} /> FIDELEASE</span> 
            <span className="">Licence Professionelle</span>
        </div> */}
        <div className='flex row allwidth height95'>
            <Fade left>  
            
                <div className='flex flexdot4 justifystart allheight'>
                    <div className='title flexdot3 text-shadow height90 justifystart'>
                        <div className="flex"> 
                            <img className="img-shadow" src={fLogo} style={{ width: '5vw', height: 'auto', objectFit: 'contain' }} /> 
                            {/* FIDELEASE */}
                            <img src={fText} style={{ width: '10vw', height: 'auto', objectFit: 'contain' }} />
                        </div> 
                        <span className="primary">Licence Professionelle</span>
                    </div>
                    <div className="flex flexdot6" style={{marginTop: '7%'}}>
                        <img src={mobileApp} style={{ height: '50vh', width: 'auto', objectFit: 'contain', marginLeft: '-20%' }} />
                    </div>
                </div>
            </Fade>
            <Fade right>  
                <div className='flex flexdot5 allheight padded1'>
                    <div className='flex title xxxlarge flexdot1'>Proposez la fidélisation 2.0 à vos clients !</div>
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
                                        { title: 'Cartes Physiques', checks: [1,1], icon: <BsCreditCard2Front /> },
                                        { title: 'Cartes Dématérialisées', checks: [0,1], icon: <MdOutlinePhonelinkRing /> },
                                        { title: 'Offres évolutives', checks: [0,1], icon: <MdOutlineVolunteerActivism /> },
                                        { title: 'Offres avec validité', checks: [0,1], icon: <RiTimerLine /> },
                                        { title: 'Offres ponctuelles', checks: [0,1], icon: <BsCalendar3 /> },
                                        { title: 'Points en circulation', checks: [0,1], icon: <MdOutlineBlurCircular /> },
                                        { title: "Valeur réelle d'un point", checks: [0,1], icon: <RiMoneyEuroCircleLine /> },
                                        { title: "Notifications clients", checks: [0,1], icon: <AiOutlineNotification /> },
                                        { title: "Statistiques d'affluence", checks: [0,1], icon: <AiFillPieChart /> },
                                        { title: "Fichier clients", checks: [0,1], icon: <FaUsers /> },
                                        { title: "Point transférables", checks: [0,1], icon: <BiTransfer /> },
                                        { title: "Cartes oubliées créditables", checks: [0,1], icon: <TbCreditCardOff /> },
                                        
                                    ].map((item, itemi) => <ItemRow 
                                        key={`prosview_item_${itemi}`} 
                                        {...item}    
                                    />)
                                }
                            </div>

                        </div>


                    </div>


                </div>
                
            </Fade>
        
        </div>
        <div className="flex allwidth" style={{height: '5%'}}>
            {/* <button  onClick={() => smoothScroll(section3)}>En savoir plus</button> */}
            <Button
                title="En savoir plus"
                icon={<TiInfoLargeOutline />}
                className="app-button marged-t xlarge"
                onClick={() => smoothScroll(section3)}
            />
        </div>
    </div>

    {/* SECTION 2 */}
    <div className='screensize flex justifystart' ref={section3} style={{background: '#404040', color: '#fff'}}>
        {/* <div className="marged-t">Comment ça marche ?</div> */}
        <Fade right>
            <div className="flex row width95">
                <div className="flex">
                    <div className="xxlarge bold underlined">Adoption clients</div> 
                    <div className="flex alignleft alignstart">
                        <p>Invitez vos clients à télécharger l'application mobile en scannant le sticker disponible sur votre vitrine <i className="silver smaller">(offert pour la souscription à une licence professionnelle)</i></p> 
                        <p>À l'ouverture de l'application, le client renseigne son adresse email et c'est tout... une carte de fidélité dématérialisée est automatiquement créé et vous pouvez tout de suite la créditer, même sans réseau internet !</p>
                        <p>Les plus récalcitrants pourront toujours profiter des cartes physiques uniques pré-imprimées <i className="silver smaller">(offert pour la souscription à une licence professionnelle)</i>. L'utilisation reste la même qu'avec une carte classique à la différence que le client ne pourra pas transférer ses points à d'autres membres du réseau.</p> 
                        <p>Du point de vue du commerçant, le qr-code est scanné de la même manière qu'avec l'application.</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="img-shadow" src={sticker} style={{ height: 'auto', width: '20vw', objectFit: 'contain' }} />
                    <img className="img-shadow" src={physicalCard} style={{ height: 'auto', width: '20vw', objectFit: 'contain', position: "absolute", right: '-2.5vw' }} />
                                    
                </div>
            </div>
        </Fade>
        <Fade left>
            <div className="flex row width95">
                <div className="flex">
                    <img className="img-shadow" src={newOffer} style={{ height: 'auto', width: '15vw', objectFit: 'contain' }} />
                </div>
                <div className="flex">
                    <div className="xxlarge bold underlined">Offres uniques et personnalisées</div> 
                    <div className="flex alignleft alignstart">
                       <p>Le constat est sans appel, les offres de fidélité sont trop souvent similaires et limitées.</p>
                       <p> Avec Fidelease, vous vous démarquez en proposant des offres inédites à votre image. </p>
                       <p> D'un simple café à un week-end en famille en passant par une réduction pour un soir, tout est possible !</p>
                       <p> En moins de 30 secondes et 5 étapes de création, votre offre est instantanément communiquée à tous vos clients via une notification sur leur téléphone.</p>
                       <p> La validité de l'offre étant paramétrable, mettre en place des opérations commerciales au sein de votre clientèle devient un jeu d'enfant !</p>
                    </div>
                </div>
            </div>
        </Fade>
       
        <Fade right>
            <div className="flex row width95">
               
                <div className="flex">
                    <div className="xxlarge bold underlined">Fichier client</div> 
                    <div className="flex alignleft alignstart">
                        <p>Vos clients fidélisés sont réunis dans une même liste.</p> 
                        <p>Une section de recherche vous permet de retrouver rapidement les informations relatives à un client et même de réaliser une transaction sans avoir à scanner son QR-Code.</p>
                        <p>La fiche du client contient des options de contact permettant de l'appeler et de lui envoyer un sms ou un email en un seul click</p>
                    </div>
                </div>

                <div className="flex row">
                    <img className="img-shadow" src={customerFile} style={{ height: 'auto', width: '15vw', objectFit: 'contain' }} />
                    &nbsp;
                    <img className="img-shadow" src={txsView} style={{ height: 'auto', width: '15vw', objectFit: 'contain' }} />
                </div>
            </div>
        </Fade>
        <Fade left>
            <div className="flex row width95">
                <div className="flex row">
                    <img className="img-shadow" src={statisticsView} style={{ height: 'auto', width: '15vw', objectFit: 'contain' }} />
                    &nbsp;
                    <img className="img-shadow" src={numStatsView} style={{ height: 'auto', width: '15vw', objectFit: 'contain' }} />
                </div>

                <div className="flex">
                    <div className="xxlarge bold underlined">Statistiques</div> 
                    <div className="flex alignleft alignstart">
                        <p>Les statistiques sont des données qui vont devenir précieuses à vos yeux !</p>
                        <p>La numérisation de vos passages clients et du soldes de leurs points, combinée avec la valeur de vos offres permet un fantastique cocktail de datas s'avérant utile à l'exploitation de votre commerce.</p>
                        <p>
                            Le calcul de l'affluence permet d'avoir une idée de la fréquentation de votre établissement sur une période donnée par rapport à votre moyenne caclulée sur le total de votre activité.
                        </p>
                        <p>
                            Vous trouvez la soirée un peu calme par rapport à l'accoutumé ? Consultez Fidelease, confirmez votre observation via les statistiques et agissez ! Ajoutez une offre temporaire alléchante, vos clients sont immédiatement informé...
                            <br />
                            Bravo ! Vous venez de sauver votre soirée !
                                
                        </p>
                    </div>
                </div>
                
            </div>
        </Fade>

        

    </div>
</div>