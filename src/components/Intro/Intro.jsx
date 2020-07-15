import React from 'react';
import anna from "../../assets/anna-name.png";
import './Intro.scss';
import Particles from 'react-particles-js';

const Intro = () => {
    return (
        <div className='intro__box'>

        <div className='intro__top'>
          Anna
        </div>
        
        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            },
            color: {
                value: "373AD5"
            } 
          },
          polygon: {
              enable: true,
              move: {
                  radius: 100
              }
          } 
        }} 
      /> 
      <img className='intro__name' src={anna}/>
        </div>
    )
}

export default Intro;