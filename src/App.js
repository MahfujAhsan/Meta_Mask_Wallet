import './App.css';
import About from './components/About/About';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
