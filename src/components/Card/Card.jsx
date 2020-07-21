import React from 'react';
import "./Card.scss";
import forest from '../../assets/forest.jpg'
import mock from '../../assets/dz_mock1.png';

const Card = (props) => {

    // window.addEventListener("scroll", function(event) {
    //     let scroller = document.querySelector('.card__image');
    //     let height = scroller.getBoundingClientRect().top 
    //     let value = window.scrollY - height/(20);

    //     // let top = document.body.getBoundingClientRect().top
    //     // let calc = 1 - (top - height + 185) / 185
    //     console.log(value)
        
    //     scroller.style.backgroundSize = `${value}% ${value}%`;

    // });


    return (
        <div className='card'>
            <div className='card__blurb'>
                <h3 className='card__project'>Danger Zone</h3>
            </div>
            <div className='card__back'>
                <img className='card__mock' src={mock}/>
            </div>
        </div>

    )
}

export default Card;