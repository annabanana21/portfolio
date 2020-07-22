import React from 'react';
import './VideoSlide.scss';

const VideoSlide = (props) => {
    return (
        <div className='slide'>
            <h4 className='slide__title'>{props.title}</h4>
            <div className='slide__row'>
            </div>
        </div>
    )
}

export default VideoSlide;