import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density : {
          enable: true,
          value_area:800
        }
      }
    }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'params={particlesOptions}
              />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      
      {/* <FaceRecongnition /> */}

    </div>
  );
}

export default App;
