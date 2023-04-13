import './App.css';
import About from './components/About';
import Home from './components/Home';
import Mysong from './components/Mysong';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Youtube from './components/Youtube';
import Foter from './components/Foter';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Mysong />
      <Youtube />
      <Foter />
    </div>
  );
}

export default App;
