import React from 'react';
import './Hero.scss';
import me from '../../assets/Anna.jpg';
import github from '../../assets/github.svg';
import link from '../../assets/linkedin.svg';

const Hero = () => {
    return (<section className='hero'>
        <div className='hero__feature--colored'>
            <img src={me} className='hero__image'/>
        </div>
        <div className='hero__feature'>
            <div className='hero__blurb'>
                <h2 className='hero__name'>Anna Mastoris</h2>
                <h3 className='hero__title'>FULL STACK WEB DEVELOPER</h3>
                <p className='hero__text'>For as long as I can remember I have marveled at technology's capacity to transform the way we live. That is why I have become invested in learning the processes involved in the creation of these powerful applications. As a result, my research has equipped me with practical skills concerning web and app development, and my enthusiasm regarding tech has created an insatiable hunger to continue improving and acquiring more.</p>
                <div><img className='hero__icon' src={github}/>
                <img className='hero__icon' src={link}/>
                </div>
            </div>
        </div>
    </section>)
}

export default Hero;