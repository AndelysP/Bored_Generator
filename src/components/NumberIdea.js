import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const NumberIdea = () => {
  // Idée selon le nombre de personnes
  const [numbers, setNumbers] = useState(0);
  const [numberIdeas, setNumbersIdeas] = useState([]);
  
  return (
    <>
      <Navbar />
      <div className="generator">

      </div>
      <Footer />
    </>
  )
}

export default NumberIdea