import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Hero.css'

export default function Hero() {
    const navigate = useNavigate();

    useEffect(() => {
        const scrollElements = document.querySelectorAll('.scroll-element');

        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const handleScroll = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el)) {
                    el.classList.add('in-view');
                } else {
                    el.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div id="home" className="hero-section scroll-element">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to ShelfSpace – </h1>
                    <h1 className="hero-title">Your Digital Library Awaits!</h1>
                    <p className="hero-subtitle">Effortlessly track, organize, and discover your favorite books in one place.</p>
                    <button className="cta-button"
                        onClick={() => navigate('/signup')}
                    >
                        Explore the Library
                    </button>
                </div>
            </div>
        </div>
    )
}
