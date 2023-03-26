import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {

  const curentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <a href="https://github.com/AndelysP/Bored_Generator/commits/master" target='_blank'><AiFillGithub size={20} className="git-icon"/></a>
      <p>
        &#x24D2; {curentYear} BoredBrain - All rights Reserved 
      </p>
    </div>
  )
}

export default Footer