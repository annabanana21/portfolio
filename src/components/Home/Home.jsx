import React, {useState, useEffect} from 'react';
import './Home.scss';
import {ReactComponent as Icon} from '../../assets/github.svg';
import {ReactComponent as Icon2} from '../../assets/linkedin.svg';

const Home = () => {

    // let [scrollPercent, setScrollPercent] = useState(0);

    // window.addEventListener('scroll', () => {
    //     var scrollTop = window.pageYOffset;
    //     setScrollPercent(scrollTop);
    // })


    // window.addEventListener("scroll", function(event) {
    //     let scroller = document.querySelector('.home__scroll');

    //     if (scrollPercent >= 200 && scrollPercent <= 421) {
    //         if (scrollPercent === 421) {
    //             scroller.style.opacity = `${((421-scrollPercent)/421)}%`;
    //         } else {
    //             scroller.style.opacity = `${0}%`;
    //         }
    //     }
    // });

    // useEffect(() => {

    // }, [scrollPercent])




    return (
        <section className='home'>
        <div className='home__bar'>
                <ul className='home__wrap'>
                    <li className='home__tab'>about</li>
                    <li className='home__tab'>projects</li>
                </ul>
        </div>
            <div className='home__container'>
            <div className='home__image'>
                <div className="home__scroll">
                    <h2 className='home__title'>ANNA MASTORIS</h2>
                    <h2 className='home__title--small'>full-stack developer & creative mind</h2>
                </div>
            </div>
            </div>
            <div className='home__social'>
                <a href="https://github.com/annabanana21" target="_blank" className='home__link'><Icon className='home__icon'/></a>
                <a href="https://www.linkedin.com/in/anna-mastoris/" target="_blank" className='home__link'><Icon2 className='home__icon'/></a>
            </div>
        </section>)
}

export default Home;