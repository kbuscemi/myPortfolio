import React from 'react';
import './Portfolio.css';
import NavBar from '../NavBar/NavBar';
import { Card, CardTitle } from 'react-materialize';

const Portfolio = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <h3>Projects</h3>
            </div>
            <div className='wrapper'>
                <div className='top'>
                    <div className='boxOne'>
                            <Card header={<CardTitle reveal image={"https://i.imgur.com/zpSIzTP.png"} waves='light'/>}
                                title="Flight Tracker"
                                
                                reveal={
                                    <p className='context'>
                                        Flight Tracker is a platform for users to log and track their upcoming flight itineraries. A Heroku hosted
                                        site written as a full stack MERN application with Google Maps and Google Places Integration.
                                        <br/>
                                        <br/>
                                        JavaScript + React.js + Node.js + Express.js
                                        <br/>
                                        + MongoDB
                                        <br/>
                                        <br/>
                                        <a href='https://flight-planner.herokuapp.com/' target='blank'><i className="fa fa-external-link"></i></a>
                                        <a href='https://github.com/kbuscemi/flight-planner' target='blank'><i className="fa fa-github"></i></a>
                                    </p>
                                }>
                            </Card>
                    </div>
                    <div className='boxTwo'>
                            <Card header={<CardTitle reveal image={"https://i.imgur.com/lijsUDU.png"}  waves='light'/>}
                                title="Music DB"
                                reveal={
                                    <p>
                                        Acting as the IMDB but for the music industry, Music DB showcases individuals who helped bring songs to life.
                                        Built with Node.js and MongoDB. Features the ability to login using your Facebook account and search
                                        millions of songs through Spotfiy's API.
                                        <br/>
                                        <br/>
                                        Express.js + Node.js + MongoDB + JavaScript
                                        <br/>
                                        <br/>
                                        <a href='http://imusicdb.herokuapp.com' target='blank'><i className="fa fa-external-link"></i></a>
                                        <a href='https://github.com/kbuscemi/music-db' target='blank'><i className="fa fa-github"></i></a>
                                    </p>
                                }>
                            </Card>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='boxThree'>
                            <Card header={<CardTitle reveal image={"https://i.imgur.com/9PY6i0f.png"} waves='light'/>}
                                title="Read with Me"
                                reveal={
                                    <p>
                                        Read with Me is a platform to find books to create and compile reading book lists.
                                        Features the ability to research book information.
                                        <br/>
                                        <br/>
                                        Ruby + Ruby on Rails
                                        <br/>
                                        <br/>
                                        <a href='https://read-w-mee.herokuapp.com/' target='blank'><i className="fa fa-external-link"></i></a>
                                        <a href='https://github.com/kbuscemi/Read_With_Me' target='blank'><i className="fa fa-github"></i></a>
                                    </p>
                                }>
                            </Card>
                    </div>
                    <div className='boxFour'>
                            <Card header={<CardTitle reveal image={"https://i.imgur.com/fRJp0Yl.png"} waves='light'/>}
                                title="Mancala"
                                reveal={
                                    <p>
                                        Modeled after the original board game, players can challenge one another to a game of Mancala.
                                        <br/>
                                        <br/>
                                        JavaScript + JQuery
                                        <br/>
                                        <br/>
                                        <a href='https://kbuscemi.github.io/Mancala/' target='blank'><i className="fa fa-external-link"></i></a>
                                        <a href='https://kbuscemi.github.io/Mancala/' target='blank'><i className="fa fa-github"></i></a>
                                    </p>
                                }>
                            </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;