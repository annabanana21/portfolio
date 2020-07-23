import React from 'react';
import './VideosPage.scss';
import forVideo from '../../assets/videos/loop-vid.mp4';
import forThumbnail from '../../assets/videos/forloops.jpg';

import domVideo from '../../assets/videos/DOM-walkthrough.mp4';
import domThumbnail from '../../assets/videos/DOM.jpg';
import VideoHero from '../VideoHero/VideoHero';
import VideoSlide from '../VideoSlide/VideoSlide';


const videosList = [
    {
        title: "For Loops in Depth",
        genre: "Theory",
        description: "Step by step walk-through of the for loop's lifecycle.",
        video: forVideo,
        thumbnail: forThumbnail
    },
    {
        title: "Document Object Model",
        genre: "Instruction",
        description: "Manipulating html elements with JavaScript using the DOM",
        video: domVideo,
        thumbnail: domThumbnail
    }
];


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