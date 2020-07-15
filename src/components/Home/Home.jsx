import React, {useState} from 'react';
import './Home.scss';

const Home = () => {

    let [scrollPos, setScroll] = useState(0);

    const scrolling = (pos) => {
        if (pos > -3 && pos <= 0) {
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                console.log("UP")
                setScroll(pos+0.001);
                return pos+0.001

            }else {
                console.log("DOWN")
                setScroll(pos-0.001);
                return pos-0.001
            }
            
        }   
    }



    window.addEventListener("scroll", function(event) {
        let scroller = document.querySelector('.home__scroll');
        let value = -window.scrollY/60;
        console.log()
        scroller.style.transform = "skewY("+ value +"deg)"

        let top = document.body.getBoundingClientRect().top
        let height = scroller.getBoundingClientRect().top 
        let calc = 1 - (top - height + 180) / 180
        console.log(calc)
        
        scroller.style.opacity = calc;


        // let currentAmount = scroller.style.transform;
        // let setter = scrolling(Number(currentAmount.slice(11, currentAmount.length-4)));
        // scroller.style.transform = "skew(0deg, "+setter+"deg)";
    });

    return (
        <section className='home'>
            <div className='home__container'>
            <div className="home__scroll">
                <h2 className='home__title'>ANNA</h2>
                <h2 className='home__title'>MASTORIS</h2>
            </div>
            </div>
        </section>)
}

export default Home;