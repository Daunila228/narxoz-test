import './App.css';
import { Header } from './components/Header';
import { HeaderInfo } from './components/HeaderInfo';
import { HeaderImg } from './components/HeaderImg';
import { Achievements } from './components/Achievements';
import { Bubble } from './components/Bubble';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderInfo></HeaderInfo>
      <HeaderImg></HeaderImg>
      <Achievements></Achievements>
      <Bubble></Bubble>
      <Reviews></Reviews>
      <Services></Services>
      <AppointmentForm></AppointmentForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
