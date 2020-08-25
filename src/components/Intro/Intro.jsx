import React from 'react';
import anna from "../../assets/anna-name.png";
import './Intro.scss';
import mouse from '../../assets/mouse.svg';
import monitor from '../../assets/moniter.svg';
import cat from '../../assets/Cat.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Intro = () => {
    return (
      <section className='intro'>
        <div>
          <ScrollAnimation animateIn="animate__fadeIn" delay='2' className='intro__fade' >
            <h3 className='intro__name'>hungry to learn more</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeIn" delay='3' className='intro__fade' >
            <h3 className='intro__name'>and currently</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeIn" delay='4' className='intro__fade' >
            <h3 className='intro__name--alt'>debugging code...</h3>
          </ScrollAnimation>
        </div>
        <ScrollAnimation className='intro__row' animateIn="animate__fadeIn">
          <div className='intro__column'>
          I am a full-stack developer who is currently TAing a second semester of BrainStation's web development diploma program. I am proficient in javascript and React with prior experience with python and Java.
          </div>
          <div className='intro__column'>
          I am a full-stack developer who is currently TAing a second semester of BrainStation's web development diploma program. I am proficient in javascript and React with prior experience with python and Java.
          </div>
          <div className='intro__column'>
          I am a full-stack developer who is currently TAing a second semester of BrainStation's web development diploma program. I am proficient in javascript and React with prior experience with python and Java.
          </div>
        </ScrollAnimation>
      </section>
    )
}

export default Intro;