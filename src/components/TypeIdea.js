import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Button } from 'antd'
import { useState } from 'react'

const TypeIdea = () => {

  // Idée selon le type d'activité 
  const [type, setType] = useState("")
  const [typeIdeas, setTypeIdeas] = useState([]);

  const getTypeIdeas = async () => {
    await fetch(`https://www.boredapi.com/api/activity?type=${type}`)
      .then(res => res.json())
      .then(data => setTypeIdeas(data))
  }

  const handleSubmitType = (e) => {
    // Pour pallier à l 'erreur 'Cannot read properties of undefined (reading 'preventDefault')'
    if (e) {
      e.preventDefault();
    }
    getTypeIdeas();
  }

  return (
    <>
      <Navbar />
      <div className="generator">
        <h1>Vous souhaitez trouver une activité selon un type particulier ?</h1>
        <p>Cliquez sur un des boutons ci-dessous pour générer une idée ! </p>

        <div className="btn-list">
          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("social");
            handleSubmitType()
          }}>Social</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("education");
            handleSubmitType()
          }}
          >Education</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("recrational");
            handleSubmitType()
          }}
          >Récréatif</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("diy");
            handleSubmitType()
          }}
          >Bricolage</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("charity");
            handleSubmitType()
          }}
          >Charité</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("cooking");
            handleSubmitType()
          }}
          >Cuisine</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("relaxation");
            handleSubmitType()
          }}
          >Détente</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("music");
            handleSubmitType()
          }}
          >Musique</Button>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            setType("busywork");
            handleSubmitType()
          }}
          >Travail</Button>

        </div>

        <h3> {typeIdeas.activity}</h3>

      </div>
      <Footer />
    </>
  )
}

export default TypeIdea