import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import './HomePage.css'
export default function HomePage() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <Hero />
        </div>
    )
}
