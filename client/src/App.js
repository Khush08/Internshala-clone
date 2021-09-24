import './App.css';
import NavBar from './components/Nav/NavBar';
import Jackpot from './components/Offers/Jackpot';
import Fraud from './components/FraudAlert/Fraud';
import Application from './components/Applications/Application';
import OldApps from './components/OldApplications/OldApps';
import Reccomends from './components/Reccomendations/Reccomends';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jackpot />
      <Fraud />
      <Application />
      <OldApps />
      <Reccomends />
      <Footer />
    </div>
  );
}

export default App;
