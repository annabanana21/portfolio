import React from 'react';
import './VideoHero.scss';
import js from '../../assets/js.png';
import rct from '../../assets/react.png';
import nod from '../../assets/node.png';

const VideoHero = () => {
    return (
        <section>
            <div className='display'>
                <h4 className='display__head--small'>VIDEO RESOURCES TO</h4>
                <h2 className='display__head'>KICKSTART YOUR LEARNING</h2>
                <form>
                    <input name='course' placeholder='Search' type='text' className='display__search'/>
                </form>
            </div>
            <div className='display__bar'>
                <img className='display__icon' src={js}/>
                <img className='display__icon' src={nod}/>
                <img className='display__icon' src={rct}/>
            </div>
        
        </section>
    )
}

export default VideoHero;