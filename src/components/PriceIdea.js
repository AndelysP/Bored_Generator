import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { useState } from 'react';
import { Button, Slider } from 'antd';

const PriceIdea = () => {
  // Idée selon le prix 
  const [price, setPrice] = useState(0);
  const [priceIdeas, setPriceIdeas] = useState([]);

  const getPriceIdeas = async () => {
    await fetch(`http://www.boredapi.com/api/activity?price=${price}`)
      .then(res => res.json())
      .then(data => setPriceIdeas(data))
  }

  const handleSubmitPrice = (e) => {
    e.preventDefault();

    getPriceIdeas();
  }

  return (
    <>
      <Navbar />
      <div className="generator">
        <h1>Vous souhaitez trouver une activité selon le prix ?</h1>
        <p className='price'>Sélectionnez une fourchette de prix comprise entre 0 et 1 pour générer une idée !</p>

        <div className="slider-container">
          <Slider min={0} max={1} step={0.1} onChange={setPrice} value={price} />
        </div>

        <Button type="primary" onClick={handleSubmitPrice}>Rechercher</Button>


        <>
          <h3>Activité: {priceIdeas.activity}</h3>
          <span>Fourchette de prix : {priceIdeas.price} / 1</span>
        </>

      </div>
      <Footer />
    </>
  )
}

export default PriceIdea