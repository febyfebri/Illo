import './App.css';
import About from './components/About';
import Home from './components/Home';
import Mysong from './components/Mysong';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Youtube from './components/Youtube';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Mysong />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;
