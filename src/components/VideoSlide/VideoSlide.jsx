import React from 'react';
import './VideoSlide.scss';
import VideoCard from '../VideoCard/VideoCard';

const VideoSlide = (props) => {
    return (
        <div className='slide'>
            <h4 className='slide__title'>{props.title}</h4>
            <div className='slide__row'>
                {
                    props.videosList.map(video => <VideoCard video={video}/>)
                }
            </div>
        </div>
    )
}

export default VideoSlide;