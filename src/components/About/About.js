import React from 'react'
import './About.css'
import NavBar from '../NavBar/NavBar';

const About = () => {
    return (
        <div className='container2'>
          <NavBar />
            {/* <div className='about'> */}
             <div className='containerWrapper'>
                <div className='col s6 picture'>
                    <div className='imgPic'>
                    <img src="https://i.imgur.com/imOPJjP.png" alt='myPic' className='myPic' />
                    </div>
                </div>
                <div className='col s6 aboutMe'>
                    <h3 className='title'>About Me</h3>
                    <p className='context'>As a frontend engineer I strive to build immersive and intuitive applications. I am always seeking out 
                        opportunities and challenges that are meaningful to me both personally and professionally.
                        <br/>
                        <br/>
                        When I'm not coding, I'm either out in nature with my dog or I'm at a cafe drinking coffee and reading a book.
                        <br/>
                        <br/>
                        If you would like to get in touch, feel free to reach out.
                    </p>
                    <br/>
                    <div className='icons'>
                        <a href='https://github.com/kbuscemi' target='blank'><i className="fa fa-github github"></i></a>
                        <a href='https://www.linkedin.com/in/kayleebuscemi/' target='blank'><i className="fa fa-linkedin-square linkedin"></i></a>
                        <span className='email'>email: kaylee.buscemi@gmail.com</span>
                    </div>
                </div>
              </div>
            </div>
        // </div>
    )
}

export default About;