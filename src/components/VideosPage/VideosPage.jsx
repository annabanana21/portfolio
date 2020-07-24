import React from 'react';
import './VideosPage.scss';
import VideoHero from '../VideoHero/VideoHero';
import VideoSlide from '../VideoSlide/VideoSlide';
import videosList from '../../data/videos';



const VideosPage = () => {
    return (
        <main>
            <VideoHero />
            <section className='vid'>
                <VideoSlide title={"JavaScript"} videosList={videosList}/>
            </section>
        </main>
    )

}

export default VideosPage;