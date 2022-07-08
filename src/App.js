import logoWhite from './images/logo_alpha_white.png';
import logo from './images/logo_alpha.png';
import './App.css';
import React, { useEffect, useState } from 'react';
import homeVideo from './assets/home_video_1.mp4';
import appstore from './images/appstore.png';
import playstore from './images/playstore.png';


import { section1, section2 } from './constants';
import { smoothScroll } from './utils';
import { Fade } from 'react-reveal';
import { ImMobile } from 'react-icons/im';
import ProsView from './ProsView';

const mainViews = {
  'commercant': <ProsView />,
  'client': <div></div>,
}

const IamButton = ({title, onClick}) => <button onClick={onClick} className='app-button' style={{width: '20vw'}}><span className='smaller'>JE SUIS</span> <br/><span className='bold title'> {title} </span></button>


class App extends React.Component {

  state = {
    loading: true,
    mainView: undefined,
    videoStarted: false
  }

  componentDidMount() {
    console.log('LOADING ASYNC STUFFS...')
    // load stuffs here...
    const backVid = document.createElement('video');
    backVid.addEventListener('canplay', (vload) => this.setState({loading: vload.isTrusted ? false : true}))
    backVid.setAttribute('src', homeVideo);
  
  

    
  }

  componentDidUpdate() {
    const { loading, videoStarted } = this.state;

    if (!loading && !videoStarted) {
      console.log('ASYNC STUFFS LOADED !')
      console.log('STARTING VIDEO...')

      document.querySelector('#home_video').play();
      this.setState({ videoStarted: true })
    }
  }

  render() {
    const { loading, videoStarted, mainView } = this.state;

    return (
      <div className="App flex" ref={section1}>
        {
          loading 
          ? <div className="flex" style={{width: '100vw', height: '100vh', background: '#fff', color: '#303030'}}>
              <img 
                src={logo}
                style={{ height: '25vh', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                CHARGEMENT
              </div>
          </div>
          : <div className="" style={{background: '#fff'}}>
              <video autoPlay muted loop id="home_video"  style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}>
                <source src={homeVideo} type="video/mp4"/>
              </video>
              <div className="flex" style={{position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', color: '#fff'}}>
                <div className='flex'>
                  <img 
                    src={logoWhite}
                    style={{ height: '25vh', width: 'auto', objectFit: 'contain' }}
                    className="img-shadow"
                  />
                </div>
                <div className='flex'>
  
                  <div className='white bold band'>
                    <div className="text-shadow" style={{fontSize: 40}}>Première solution dématérialisée de fidélisation client multi-commerce</div>
                    <p>
                      <i className="whitesmoke" style={{fontSize: 25}}> Votre fidélité est réellement récompensée grâce à des offres plus diversifiées et plus sécurisées </i>
                    </p>
                  </div>
                </div>
                
                <div className='flex row spaceevenly width80'>
                  <IamButton title="COMMERÇANT" onClick={() => {
                    this.setState({ mainView: 'commercant' });

                    setTimeout(() => smoothScroll(section2))
                    
                  }} />
                  <IamButton title="CLIENT" onClick={() => {
                    this.setState({ mainView: 'client' })
                    // smoothScroll(section2)
                    setTimeout(() => smoothScroll(section2))

                  }} />
                </div>
  
                <div> 
                  <div className='flex spaceevenly width50 row band'>
                    <img src={appstore} className=" clickable hoverscale" style={{ height: '6vh', width: 'auto', objectFit: 'contain', margin: '2%', padding: '0 5%' }} />
                    <img src={playstore} className=" clickable hoverscale" style={{ height: '6vh', width: 'auto', objectFit: 'contain', padding: '0 5%' }} />
                  </div>
                </div>
              </div>
  
              {/* APP VIEW */}
              {
                mainView
                ? <div className='app-view' ref={section2}>
                  {
                    mainViews[mainView]
                  }
                </div>
                : null
              }
          </div>
          
        }
      </div>
    );
  }

}
                       
// function App() {

//   const [loading, setLoading] = useState(true);
//   const [mainView, setMainView] = useState(undefined);
//   const [videoStarted, setVideoStarted] = useState(false);
  
//   useEffect(() => {
//     (async() => {

//       if (loading) {
//         console.log('LOADING ASYNC STUFFS...')
//         // load stuffs here...
//         const backVid = document.createElement('video');
//         backVid.addEventListener('canplay', (vload) => setLoading(vload.isTrusted ? false : true))
//         backVid.setAttribute('src', homeVideo);

       
//         console.log('ASYNC STUFFS LOADED !')
    
//       }
  
//       else if (!videoStarted) {
//         console.log('STARTING VIDEO...')
  
//         document.querySelector('#home_video').play();
//         setVideoStarted(true)
//       }
//       else {
//         console.log('VIDEO STARTED')
  
//       }
//     })();
//   }, [ loading, videoStarted ])

//   return (
//     <div className="App flex" ref={section1}>
//       {
//         loading 
//         ? <div className="flex" style={{width: '100vw', height: '100vh', background: '#fff', color: '#303030'}}>
//             <img 
//               src={logo}
//               style={{ height: '25vh', width: 'auto', objectFit: 'contain' }}
//             />
//             <div>
//               CHARGEMENT
//             </div>
//         </div>
//         : <div className="" style={{background: '#fff'}}>
//             <video autoPlay muted loop id="home_video"  style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}>
//               <source src={homeVideo} type="video/mp4"/>
//             </video>
//             <div className="flex" style={{position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', color: '#fff'}}>
//               <div className='flex'>
//                 <img 
//                   src={logoWhite}
//                   style={{ height: '25vh', width: 'auto', objectFit: 'contain' }}
//                   className="img-shadow"
//                 />
//               </div>
//               <div className='flex'>

//                 <div className='white bold band'>
//                   <div className="text-shadow" style={{fontSize: 40}}>Première solution dématérialisée de fidélisation client multi-commerce</div>
//                   <p>
//                     <i className="whitesmoke" style={{fontSize: 25}}> Votre fidélité est réellement récompensée grâce à des offres plus diversifiées et plus sécurisées </i>
//                   </p>
//                 </div>
//               </div>
              
//               <div className='flex row spaceevenly width80'>
//                 <IamButton title="COMMERÇANT" onClick={() => {
//                   setMainView('commercant')
//                   smoothScroll(section2)
//                 }} />
//                 <IamButton title="CLIENT" onClick={() => {
//                   setMainView('commercant')
//                   smoothScroll(section2)
//                 }} />
//               </div>

//               <div> 
//                 <div className='flex spaceevenly width50 row band'>
//                   <img src={appstore} className=" clickable hoverscale" style={{ height: '6vh', width: 'auto', objectFit: 'contain', margin: '2%', padding: '0 5%' }} />
//                   <img src={playstore} className=" clickable hoverscale" style={{ height: '6vh', width: 'auto', objectFit: 'contain', padding: '0 5%' }} />
//                 </div>
//               </div>
//             </div>

//             {/* APP VIEW */}
//             <div className='app-view' ref={section2}>
//               SELECTED APP VIEW : { mainView }
//             </div>
//         </div>
        
//       }
//     </div>
//   );
// }

export default App;
