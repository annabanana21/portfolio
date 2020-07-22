import React from 'react';
import './VideosPage.scss';
import vid1 from '../../assets/forloops.mp4';
import VideoHero from '../VideoHero/VideoHero';
import VideoSlide from '../VideoSlide/VideoSlide';


const videosList = [
    {
        title: "For Loops in Depth",
        genre: "Theory",
        description: "Step by step walk-through of the for loop's lifecycle.",
        video: vid1
    }

];


const VideosPage = () => {
    return (
        <main>
            <VideoHero />
            <section className='vid'>
                <VideoSlide title={"JavaScript"}/>
            </section>
        </main>
    )

}

export default VideosPage;