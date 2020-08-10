import React from 'react';
import './Projects.scss';
import Card from '../Card/Card';
import gear from '../../assets/gear1.png';
import smallgear from '../../assets/gear2.png';

const Projects = () => {
    return (
        <section className='projects'>
            <h2 className='projects__title'>Application Showcase</h2>
            <div className='projects__box'>
                <img src={gear} className='projects__gear'/>
                <img src={smallgear} className='projects__gear--small'/>
            </div>
            <h5 className='projects__title--small'>Under Construction</h5>
        </section>)
}

export default Projects;