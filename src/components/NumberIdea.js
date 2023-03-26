import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from 'react';
import { Slider, Button } from 'antd';

const NumberIdea = () => {
  // Idée selon le nombre de personnes
  const [numbers, setNumbers] = useState();
  const [numberIdeas, setNumbersIdeas] = useState([]);

  const numberParticipantIdea = async () => {
    await fetch(`https://www.boredapi.com/api/activity?participants=${numbers}`)
      .then(res => res.json())
      .then(data => setNumbersIdeas(data))
  }

  const handleSubmitNumber = (e) => {
    e.preventDefault();
    numberParticipantIdea();
  }

  return (
    <>
      <Navbar />
      <div className="generator">
        <h1>Vous souhaitez trouver une activité selon le nombre de participants ?</h1>
        <p className='participant'>Sélectionnez le nombre de participants pour générer une idée ! </p>

        <div className="slider-container">
          <Slider min={1} max={8} onChange={setNumbers} value={numbers} />
        </div>

        <Button type="primary" onClick={handleSubmitNumber}>Rechercher</Button>

        <>
          <h3>Activité: {numberIdeas.activity}</h3>
          <p className='participant'>Participants: {numberIdeas.participants} personnes</p>
        </>

      </div>
      <Footer />
    </>
  )
}

export default NumberIdea