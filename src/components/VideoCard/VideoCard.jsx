import React from 'react';
import './VideoCard.scss';
import ass from '../../assets/Anna.jpg'
import VideoModal from '../VideoModal/VideoModal';

class VideoCard extends React.Component {

    state = {
        show: false
    }

    reset = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const {title, genre, thumbnail} = this.props.video;
        let tag = <p className='thumb__cat'>{genre}</p>
        if (genre === "Instruction") {
            tag = <p className='thumb__cat--alt'>{genre}</p>
        }


        return (
            <>
            <div className='thumb' onClick={this.reset}>
                <div className='thumb__nail' style={{backgroundImage: `url(${thumbnail})`}}></div>
                <div className='thumb__blurb'>
                    <h5 className='thumb__name'>{title}</h5>
                    {tag}
                </div>
            </div>
            {
                this.state.show && <VideoModal video={this.props.video} reset={this.reset}/>
            }
            </>
        )
    }
}

export default VideoCard;