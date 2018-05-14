import React from 'react';
import './Portfolio.css';
import { MediaBox } from 'react-materialize';
import NavBar from '../NavBar/NavBar';


const Portfolio = () => {
    return (
        <div className='container3'>
          <NavBar />
            <div className='headingContainer'>
                <div className='heading'>
                    <h4>Portfolio</h4>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='row1'>
                    <div className='card1'>
                        <p className='title'>Flight&nbsp;Tracker</p>
                        <p className='tech'>React • Express • Node.js • Mongoose/MongoDB • JavaScript</p>
                        <MediaBox src='https://i.imgur.com/LllyjgM.png' caption="Flight Tracker" width="425" className='flight'/>
                    </div>
                    <div className='context1'>
                        <p>Flight Tracker is an application that allows users to submit and view their upcoming flights. Consuming Google Maps 
                           and Google Places API, users are able to look at a map and see which airports they will be flying to and from. 
                           <br />
                           <br />
                           <a href='https://flight-planner.herokuapp.com/' target='blank'>View Online</a> | <a href='https://github.com/kbuscemi/flight-planner' target='blank'>View Source</a> 
                        </p>
                    </div>
                </div>
                <div className='row2'>
                    <div className='card2'>
                        <p className='title'>Music&nbsp;DB</p>
                        <p className='tech'>Express • Node.js • Mongoose/MongoDB • JavaScript</p>
                        <MediaBox src='https://i.imgur.com/1jBXc7C.png' caption="Music DB" width="425"/> 
                    </div>
                    <div className='context2'>
                        <p>
                           Acting as the IMDB but for the music industry, Music DB showcases individuals who helped bring a song to life. By integrating 
                           Spotify's API into the application, musicians can search Spotify's database to locate their songs. 
                           <br />
                           <br />
                           <a href='http://imusicdb.herokuapp.com' target='blank'>View Online</a> | <a href='https://github.com/kbuscemi/music-db' target='blank'>View Source</a> 
                        </p>
                    </div>
                </div>
                <div className='row3'>
                    <div className='card3'>
                        <p className='title'>Read&nbsp;with&nbsp;Me</p>
                        <p className='tech'>Ruby • Ruby on Rails • HTML • CSS</p>
                        <MediaBox src='https://i.imgur.com/rdWD9Vs.png' caption="Read with Me" width="425"/>
                    </div>
                    <div className='context3'>
                        <p>Read with Me is a full stack Ruby application that was developed so users can create reading lists. Whether users are looking for a collection of books to read during the summer or over the holidays
                           they can just add them to their respective reading lists.
                           <br />
                           <br />
                           <a href='https://read-w-mee.herokuapp.com/' target='blank'>View Online</a> | <a href='https://github.com/kbuscemi/Read_With_Me' target='blank'>View Source</a>
                        </p>
                    </div>
                </div>
                <div className='row4'>
                    <div className='card4'>
                        <p className='title'>Mancala</p>
                        <p className='tech'>JavaScript • HTML • CSS</p>
                        <MediaBox src='https://i.imgur.com/WQngbWC.png' caption="Mancala" width="425"/>
                    </div>
                    <div className='context4'>
                        <p>Mancala is a web browser game modeled after the original Mancala game that is said to have been created around 700 AD.
                           <br />
                           <br />
                           <a href='https://kbuscemi.github.io/Mancala/' target='blank'>View Online</a> | <a href='https://github.com/kbuscemi/Mancala' target='blank'>View Source</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
