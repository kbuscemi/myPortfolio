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
                    <span>I’m a full stack web developer working primarly with MERN stack and JavaScript. 
                        Prior to becoming a web developer I was working in the event industry as a Community Manager. 
                        When I first started developing web applications I looked at it as more of a hobby but it quickly 
                        became a passion of mine. Currently I am working on building another full stack MERN application that replicates 
                        a typical ecommerce website.
                        <br/>
                        <br/>
                        When I'm not developing I'm either reading, exploring nature, or traveling the world. It was during my backpacking trip
                        through Europe and Southeast Aisa that I was able to capute the pictures you see on my homepage!
                        <br/>
                        <br/>
                        If you would like to get in touch or have any questions feel free to contact me!
                    </span>
                        <div>
                        <div className='icons'>
                            <a href='https://github.com/kbuscemi' target='blank'><img src="https://i.imgur.com/Qk712y6.png" alt='github' /></a>
                            <a href='https://www.linkedin.com/in/kayleebuscemi/' target='blank'><img src="https://i.imgur.com/NSSXCPb.png" alt='linkedin' className='linkedin'/></a>
                            <span className='email'>Email: Kaylee.Buscemi@gmail.com</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About;