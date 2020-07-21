import React from 'react';
import anna from "../../assets/anna-name.png";
import './Intro.scss';
import mouse from '../../assets/mouse.svg';
import monitor from '../../assets/moniter.svg';
import cat from '../../assets/Cat.svg';

const Intro = () => {
    return (
      <section className='intro'>
        <h3 className='intro__name'>More About Me</h3>
        <p className='intro__about'>I am a full-stack developer who is currently TAing a second semester of BrainStation's web development diploma program. I am proficient in javascript and React with prior experience with python and Java.</p>
      </section>
    )
}

export default Intro;