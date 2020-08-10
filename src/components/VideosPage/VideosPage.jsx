import React from 'react';
import './VideosPage.scss';
import VideoHero from '../VideoHero/VideoHero';
import VideoSlide from '../VideoSlide/VideoSlide';
import axios from 'axios';



class VideosPage extends React.Component {

    state = {
        videosList: []
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_SERVER_KEY+'/videos').then(results => {
            console.log(results)
            this.setState({
                videosList: results.data
            })
        })
    }

    render() {
        const {videosList} = this.state
        return (
            <main>
                <VideoHero />
                <section className='vid'>
                    <VideoSlide title={"JavaScript"} videosList={videosList.slice(0,4)}/>
                    <VideoSlide title={"React"} videosList={videosList.slice(4)}/>
                </section>
            </main>
        )
    }
}

export default VideosPage;