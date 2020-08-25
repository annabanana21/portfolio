import React from 'react';
import './MidLine.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const MidLine = () => {

    document.addEventListener('scroll', () => {
        let line = document.querySelector('.mid__line');
        let first = document.getElementById('mid1');
        let second = document.getElementById('mid2');
        let range = 271;

    
        if (typeof line !== undefined & line.getBoundingClientRect().top <= 500) {
            line.style.height = `${(500 - line.getBoundingClientRect().top)*1.2}px`
            //console.log(500 - line.getBoundingClientRect().top)
        }
        if (typeof first !== undefined & first.getBoundingClientRect().top < 571 & first.getBoundingClientRect().top >= 300 ) {
            let dif = (571 - first.getBoundingClientRect().top)/range;
            first.style.opacity = `${dif.toFixed(2)}`
            first.style.left = `${(dif.toFixed(2)*100)/4}%`
        }

        if (typeof second !== undefined & second.getBoundingClientRect().top < 583 & second.getBoundingClientRect().top >= 312 ) {
            let dif = (583 - second.getBoundingClientRect().top)/range;
            second.style.opacity = `${dif.toFixed(2)}`
            console.log((0.75 - (dif.toFixed(2)/4))*100);
            second.style.left = `${(0.75 - (dif.toFixed(2)/4))*100}%`
        }
    })

    return (
        <section className='mid'>
            <div className='mid__line'>
                <div className='mid__blurb' id='mid1'>
                    <p>I have worked with and taught React</p>
                </div>
                <div className='mid__blurb' id='mid2'>
                    <p>I have worked with and taught React</p>
                </div>
            </div>
        </section>
    )
}

export default MidLine;