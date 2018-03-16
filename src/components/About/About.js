import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='container2'>
            <div className='about'>
             <div className='border'>
                <div className='col s6 picture'>
                    <div className='imgPic'>
                    <img src="https://i.imgur.com/imOPJjP.png" alt='myPic' />
                    </div>
                </div>
                <div className='col s6 aboutMe'>
                    <h3>About Me</h3>
                    <span>I’m a full stack web developer working with MERN stack and JavaScript. 
                        Prior to becoming a web developer I was working in the event industry as a Community Manager. 
                        When I first started developing web applications I looked at it as more of a hobby but it quickly 
                        became a passion of mine. It’s a rewarding experience not only brining an idea to life but having 
                        the knowledge to resolve any bug you encounter along the way!
                        <br/>
                        <br/>
                        When I'm not developing I'm either reading, exploring nature, or traveling the world. It was during my backpacking trip
                        through Europe and Southeast Aisa that I was able to capute the pictures you see on my homepage!
                    </span>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About;