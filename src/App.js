
import './App.css';
import Conatct from './components/Contact';
import cat1 from './assets/cat1.jpeg';
import cat2 from './assets/cat2.jpeg';
import cat3 from './assets/cat3.jpeg';
import cat4 from './assets/cat4.jpeg';

function App() {
  return (
    <div className="App">
      <Conatct
        img={cat1}
        name="Mr.Whiskerson"
        phoneNumber="(212) 555-1234"
        email="mr.whiskerson.catnap@meow"
      />
      <Conatct
        img={cat2}
        name="Fluffykins"
        phoneNumber="(212) 567-1224"
        email="fluffykins.catnap@meow"
      />
      <Conatct
        img={cat3}
        name="Felix"
        phoneNumber="(212) 505-1233"
        email="felix.catnap@meow"
      />
      <Conatct
        img={cat4}
        name="Pumpkin"
        phoneNumber="(212) 097-1244"
        email="pumpkin.catnap@meow"
      />
    </div>
  );
}

export default App;
