//import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar.jsx';
import BodyApp from './Components/BodyApp';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World</h1>
    
        <Navbar />
        <BodyApp />
        <Footer />
      </header>
    </div>


  )
}
export default App;
