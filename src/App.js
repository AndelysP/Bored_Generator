import { useEffect, useState } from 'react';
import './assets/sass/App.scss';
import Navbar from './components/Navbar';
import { Button } from 'antd';
import Footer from './components/Footer';

function App() {

  const [ideas, setIdeas] = useState([]); // Idée aléatoire

  // Idée selon le type d'activité 
  const [type, setType] = useState("")
  const [typeIdeas, setTypeIdeas] = useState([]);

  // Idée selon le nombre de personnes
  const [numbers, setNumbers] = useState(0);
  const [numberIdeas, setNumbersIdeas] = useState([]);

  // Idée selon le prix 
  const [price, setPrice] = useState(0);
  const [priceIdeas, setPriceIdeas] = useState([]);

  const getIdeas = async () => {
    await fetch("http://www.boredapi.com/api/activity/")
      .then(res => res.json())
      .then(data => setIdeas(data))
  }

  useEffect(() => {
    getIdeas();
  }, []);


  const newIdea = () => {
    getIdeas();
  };

  const getTypeIdeas = async () => {
    await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
      .then(res => res.json())
      .then(data => setTypeIdeas(data))
  }

  const handleSubmitType = (e) => {
    e.preventDefault();

    getTypeIdeas();
  }

  const numberParticipantIdea = async () => {
    await fetch(`http://www.boredapi.com/api/activity?participants=${numbers}`)
      .then(res => res.json())
      .then(data => setNumbersIdeas(data))
  }


  const handleSubmitNumber = (e) => {
    e.preventDefault();

    numberParticipantIdea();
  }

  const getPriceIdeas = async () => {
    await fetch(`http://www.boredapi.com/api/activity?price=${price}`)
      .then(res => res.json())
      .then(data => setPriceIdeas(data))
  }

  const handleSubmitPrice = (e) => {
    e.preventDefault();

    getPriceIdeas();
  }

  console.log(priceIdeas);

  return (
    <div className="App">
      <Navbar />

      <div className="generator">
        <h1>La fin de l'ennui commence ici !</h1>

        <p>{ideas.activity}</p>
        <Button type="primary" onClick={() => newIdea()} className="generator_btn">Générer une nouvelle idée</Button>

        <form onSubmit={handleSubmitType}>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          <button type='submit'> Rechercher</button>
        </form>

        <ul>
          <li>{typeIdeas.activity}</li>
        </ul>

        <form onSubmit={handleSubmitNumber}>
          <input type="number" value={numbers} onChange={(e) => setNumbers(e.target.value)} />
          <button type='Submit'>Nombre de personnes</button>
        </form>

        <ul>
          <li>{numberIdeas.activity}</li>
        </ul>

        <form onSubmit={handleSubmitPrice}>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <button type='Submit'>Prix</button>
        </form>

        <p>La fourchette est comprise entre 0 et 1</p>
        <ul>
          <li>{priceIdeas.activity}</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default App;
