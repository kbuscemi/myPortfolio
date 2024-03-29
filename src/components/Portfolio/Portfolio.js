import React from 'react';
import './Portfolio.css';
import NavBar from '../NavBar/NavBar';
import { Card, CardTitle } from 'react-materialize';

const Portfolio = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <h3 className='portfolio'>portfolio</h3>
            </div>
            <div className='porftolioContainer'>
                <div className='boxes boxOne'>
                    <Card header={<CardTitle reveal image={"https://i.imgur.com/A19NxKS.jpg?1"} waves='light'/>}
                        title="Flight Tracker"
                        reveal={
                            <p className='description'>
                                Flight Tracker is a platform for users to view and log their upcoming and previous flight itineraries. Acquiring Google Maps
                                and Places API allows individuals to obtain the longitude and latitude of domestic and international airports as well as their abbreviations. 
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
                <div className='boxes boxTwo'>
                    <Card header={<CardTitle reveal image={"https://i.imgur.com/ORlz00H.jpg?1"}  waves='light'/>}
                        title="Music DB"
                        reveal={
                            <p className='description'>
                                Music DB is designed for music lovers. This app features the ability to search millions of songs through Spotfiy's API.
                                <br/>
                                <br/>
                                Express.js + Node.js + MongoDB + JavaScript
                                <br/>
                                <br/>
                                <a href='https://imusicdb.herokuapp.com' target='blank'><i className="fa fa-external-link"></i></a>
                                <a href='https://github.com/kbuscemi/music-db' target='blank'><i className="fa fa-github"></i></a>
                            </p>
                        }>
                    </Card>
                </div>
                <div className='boxes boxThree'>
                    <Card header={<CardTitle reveal image={"https://i.imgur.com/Gmsv2CZ.jpg?1"} waves='light'/>}
                        title="Read with Me"
                        reveal={
                            <p className='description'>
                                Read with Me is a platform for individuals to create reading book lists.
                                <br/>
                                <br/>
                                Ruby + Ruby on Rails
                                <br/>
                                <br/>
                                <br/>
                                <a href='https://read-w-mee.herokuapp.com/' target='blank'><i className="fa fa-external-link"></i></a>
                                <a href='https://github.com/kbuscemi/Read_With_Me' target='blank'><i className="fa fa-github"></i></a>
                            </p>
                        }>
                    </Card>
                </div>
                <div className='boxes boxFour' id='boxFour'> 
                    <Card header={<CardTitle reveal image={"https://i.imgur.com/xFUqlMw.jpg?1"} waves='light'/>}
                        title="Mancala"
                        reveal={
                            <p className='description'>
                                Modeled after the original board game, players can challenge one another to a game of Mancala.
                                <br/>
                                <br/>
                                <br/>
                                JavaScript + JQuery
                                <br/>
                                <br/>
                                <br/>
                                <a href='https://kbuscemi.github.io/Mancala/' target='blank'><i className="fa fa-external-link"></i></a>
                                <a href='https://github.com/kbuscemi/Mancala' target='blank'><i className="fa fa-github"></i></a>
                            </p>
                        }>
                    </Card>
                </div>
                <div className='boxes boxFive'> 
                    <Card header={<CardTitle reveal image={"https://i.imgur.com/JE2kZSy.jpg?4"}  waves='light'/>}
                        title="DraftWhisperer"
                        reveal={
                            <p className='description'>
                                A contact forum for an eSports gaming startup. 
                                <br/>
                                <br/>
                                Wordpress, JavaScript, JQuery
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <a href='https://www.draftwhisperer.com/' target='blank'><i className="fa fa-external-link"></i></a>
                            </p>
                        }>
                    </Card>
                </div>
                <div className='boxes boxSix'>
                    <Card header={<CardTitle reveal image={"https://i.imgur.com/7uwffPf.jpg?5"} waves='light'/>}
                        title="Luna Muse"
                        reveal={
                            <p className='description'>
                                A landing page designed for an artist.
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                Wordpress
                                <br/>
                                <br/>
                                <a href='https://lunamuse.co/' target='blank'><i className="fa fa-external-link"></i></a>
                            </p>
                        }>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;