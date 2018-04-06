import React from 'react'
import './Home.css'
import { Parallax } from 'react-materialize'

const Home = () => {
    return (
        <div className='container1'>
            <div className='home'>
            <Parallax imageSrc='https://i.imgur.com/9rvgXw8.png'/>
            <div className="section white">
                <div className="row container">
                <h2 className="header">K a y l e e &nbsp; B u s c e m i</h2>
                <p className="grey-text text-darken-3 lighten-3">
                    Web Developer&nbsp;|&nbsp;Visionary&nbsp;|&nbsp;Book Enthusiast&nbsp;|&nbsp;
                    World Traveler&nbsp;|&nbsp;Critical Thinker
                </p>
                </div>
            </div>
            <Parallax imageSrc='https://i.imgur.com/jZFDPVR.png'/>
            </div>
        </div>
    )
}

export default Home;
