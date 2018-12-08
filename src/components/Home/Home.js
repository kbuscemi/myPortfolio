import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='text'>Hello, I'm <span className='boldName'>Kaylee Buscemi.</span>
                    <br/>
                    I'm a front-end engineer.
                </div>
                <div className='viewBtn'>
                    <Link to='/portfolio'>
                        View My Work
                        <i className='material-icons arrow'>arrow_forward_ios</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
