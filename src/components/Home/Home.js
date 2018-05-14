import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='text'>Hello, I'm <span className='boldName'>Kaylee Buscemi.</span>
                    <br/>
                    I'm a front-end web developer.
                </div>
                <div className='viewBtn'>
                    <Link to='/portfolio'>View My Work</Link>
                    <i className='material-icons'>arrow_forward_ios</i>
                </div>
            </div>
        </div>
    )
}

export default Home;
