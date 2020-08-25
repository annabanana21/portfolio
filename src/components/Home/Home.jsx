import React, {useState, useEffect} from 'react';
import './Home.scss';
import {ReactComponent as Icon} from '../../assets/github.svg';
import {ReactComponent as Icon2} from '../../assets/linkedin.svg';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {

    return (
        <section className='home'>
        <div className='home__bar'>
                <ul className='home__wrap'>
                    <li className='home__tab'>about</li>
                    <li className='home__tab'>projects</li>
                    <li ><Link to='/videos' className='home__tab'>videos</Link></li>
                </ul>
        </div>
            <div className='home__container'>
            <div className='home__image'>
            <ScrollAnimation animateIn="animate__fadeIn" duration='1'>
                    <div className="home__scroll">
                        <h2 className='home__title'>ANNA MASTORIS</h2>
                        <h2 className='home__title--small'>full-stack developer & creative mind</h2>
                    </div>
                    </ScrollAnimation>
                    </div>
            </div>
            <div className='home__social'>
                <a href="https://github.com/annabanana21" target="_blank" className='home__link'><Icon className='home__icon'/></a>
                <a href="https://www.linkedin.com/in/anna-mastoris/" target="_blank" className='home__link'><Icon2 className='home__icon'/></a>
            </div>
        </section>)
}

export default Home;