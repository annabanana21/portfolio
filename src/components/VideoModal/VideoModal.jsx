import React, {useState} from 'react';
import './VideoModal.scss';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube'
import YouTube from 'react-youtube';
import Plyr from 'plyr';
 

class VideoModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            player: {}
        }
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.playerSetUp()
    }

    playerSetUp() {
        const player = new Plyr('#player');

        player.source = {
            type: 'video',
            sources: [
              {
                src: this.props.video.video.split('/')[3],
                provider: 'youtube',
              },
            ],
          };

        player.poster = this.props.video.thumbnail

          this.setState({
              player: player
          })
    }

    
    skip = (event, time) => {
        event.preventDefault();
        let formatTime = time.substr(0, time.indexOf(':'))*60
        formatTime = Number(formatTime) + Number(time.substr(time.indexOf(':')+1, time.length-1))
        this.state.player.currentTime = formatTime
        
    }

    download = () => {
        axios({
            url: this.props.video.file,
            method: 'GET',
            responseType: 'blob',
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', this.props.video.filename+'-source-code.zip');
            document.body.appendChild(link);
            link.click();
          });
    }


    render() {
        const {video, thumbnail, times, file} = this.props.video
        let button = <div className='mode__button' onClick={this.download}>Download Starter Code</div>;
        if (!file) {
            button = <div className='mode__button--alt' >No Starter Code</div>
        }
    
        return (
            <div className='mode' onClick={this.props.reset}>
                <div className='mode__area' onClick={(event) => {event.stopPropagation()}}>
                    <p className='mode__x' onClick={this.props.reset}>x</p>
                    <div className="mode__top">
                        <div className="mode__vid-container" id="player">
                        <iframe
                        className="player"
                        src={"https://www.youtube.com/embed/"+video.split('/')[3]+"?origin=https://plyr.io&iv_load_policy=3&autoplay=1&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"}
                        allowFullScreen={true}
                        allow="autoplay"
                        ></iframe>
                        </div>
                        <div className="mode__assets">
                            <div className='mode__time'>
                            <h5 className='mode__time-title'>Time Stamps</h5>
                            <div className='mode__scroll' id="style-2">
                            
                            {
                                times.map(timeObj => {
                                    return (
                                        <p className='mode__reg'><span onClick={(e) => this.skip(e, timeObj.time)} className='mode__num'>{timeObj.time}</span>{" - " + timeObj.mean}</p>
                                    )
                                })
                            }
                            </div>
                            {button}
                            </div>
                        </div>
                    </div>
                    <div>
                    <h3 className='mode__title'>{this.props.video.title}</h3>
                        <p className='mode__desc'>{this.props.video.description}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default VideoModal;

