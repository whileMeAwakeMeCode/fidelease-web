import logo from './images/logo_alpha_white.png';
import appstore from './images/appstore.png';
import playstore from './images/playstore.png';
import { FaFacebook } from 'react-icons/fa';

export const Footer = (props) => {

    return <div className="flex app-footer">
        <div className="flexy flexdot2">
            <img src={logo} style={{ height: '15vh', width: 'auto', objectFit: 'contain' }} />
        </div>
        <div className="flex row allwidth">

            <div className="flex allheight justifystart">
                <div className='white title'>Information</div>
                <div className='flex secondary'>
                    
                    <div className='flex flexdot2 clickable hoverscale'>Protection de la vie privée</div>
                    <div className='flex flexdot2 clickable hoverscale'>Conditions d'utilisation</div>
                    <div className='flex flexdot2 clickable hoverscale' onClick={props.openScanner}>Soldes carte physique</div>
                    <div className='flex flexdot2 clickable hoverscale'>Contact</div>
                    <div className="flex">
                        <div className='white title'>Suivez-nous !</div>
                        <div className=' clickable hoverscale white marged-t'><FaFacebook size='2vmax' /></div>
                    </div>

                </div>
            </div>
            <div className="flex allheight justifystart">
                <div className='flex flexdot4'>
                    <div className='white title'>Réseau</div>
                    <div className='flex secondary'>
                    <div className='flex flexdot3 clickable hoverscale'>Commerçants participants</div>
                    <div className='flex flexdot2 clickable hoverscale'>Commerciaux</div>

                    {/* <div className='flex flexdot3 clickable hoverscale'>Demander une démo</div> */}
                        {/* <div className='flex flexdot3 clickable hoverscale'>Rejoindre</div>
                        <div className='flex flexdot3 clickable hoverscale'>Client</div> */}
                    </div>
                </div>
                <div className='flexdot1'></div>
                <div className='flex flexdot5'>
                    <div className='white title'>Licences</div>
                    <div className='flex secondary'>
                        <div className='flex flexdot3 clickable hoverscale' onClick={props.setProMainView}>Professionnelle</div>
                        <div className='flex flexdot3 clickable hoverscale'onClick={props.setTesterView}>Testeur</div>
                        <div className='flex flexdot3 clickable hoverscale' onClick={props.setClientMainView}>Client</div>
                    </div>
                </div>
            </div>
            <div className="flex allheight justifystart">
                <div className='white title'>Fidelease App</div>
                <p>
                    Télécharger l'application pour profiter<br />pleinement de vos points de fidélité
                </p>
                <div className='flex'>

                    <img src={appstore} className=" clickable hoverscale" style={{ height: '6vh', width: 'auto', objectFit: 'contain', margin: '2%', padding: '0 5%' }} />
                    <img src={playstore} className=" clickable hoverscale" style={{ height: '6vh', width: 'auto', objectFit: 'contain', padding: '0 5%' }} />
                    
                    
                </div>
            </div>

        </div>
    </div>
}