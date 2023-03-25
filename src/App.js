import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ideas, setIdeas] = useState([]);

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

  return (
    <div className="App">
      <h1>Générateur d'idées :</h1>
      <p>{ideas.activity}</p>
      <button onClick={() => newIdea()}>Générer une nouvelle idée</button>
    </div>
  );
}

export default App;
