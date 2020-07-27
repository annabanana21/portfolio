import React, {useState} from 'react';
import './VideoModal.scss';
import axios from 'axios';

class VideoModal extends React.Component {

    state = {
        isLoading: true
    }
    
    skip = (event, time) => {
        event.preventDefault();
        const myvideo = document.querySelector('.mode__vid');
        let formatTime = time.substr(0, time.indexOf(':'))*60
        formatTime = Number(formatTime) + Number(time.substr(time.indexOf(':')+1, time.length-1))
        myvideo.currentTime = formatTime;
        myvideo.play();
    }

    render() {
        const {video, thumbnail, times} = this.props.video
    
        return (
            <div className='mode'>
                <div className='mode__area'>
                    <div className='mode__vid-container'>
                        <video className='mode__vid' poster={thumbnail} controls autoPlay>
                        <source src={video} type="video/mp4" />
                        Your browser does not support this video
                        </video>
                        <h3 className='mode__title'>{this.props.video.title}</h3>
                        <p className='mode__desc'>{this.props.video.description}</p>
                    </div>
                    <div className='mode__assets'>
                        <div className='mode__time'>
                            <h5 className='mode__time-title'>Time Stamps</h5>
                            {
                                times.map(timeObj => {
                                    return (
                                        <p className='mode__reg'><span onClick={(e) => this.skip(e, timeObj.time)} className='mode__num'>{timeObj.time}</span>{" - " + timeObj.mean}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default VideoModal;