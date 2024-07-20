import './App.css';
import { Header } from './components/Header';
import { HeaderInfo } from './components/HeaderInfo';
import { HeaderImg } from './components/HeaderImg';
import { Achievements } from './components/Achievements';
import { Bubble } from './components/Bubble';
import { Reviews } from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderInfo></HeaderInfo>
      <HeaderImg></HeaderImg>
      <Achievements></Achievements>
      <Bubble></Bubble>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
