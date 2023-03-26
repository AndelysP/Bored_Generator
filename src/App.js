import { useEffect, useState } from 'react';
import './assets/sass/App.scss';
import Navbar from './components/Navbar';
import { Button } from 'antd';
import Footer from './components/Footer';

function App() {

  const [ideas, setIdeas] = useState([]); // Idée aléatoire  

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
      <Navbar />

      <div className="generator">
        <h1>La fin de l'ennui commence ici !</h1>

        <p>{ideas.activity}</p>
        <Button type="primary" onClick={() => newIdea()} className="generator_btn">Générer une nouvelle idée</Button>
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
