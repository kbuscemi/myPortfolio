import React from 'react';
import './Portfolio.css'
import { Card, CardTitle } from 'react-materialize'

const Portfolio = () => {
    return (
        <div className='container3'>
            <div className='heading'>
                <h4>Portfolio</h4>
            </div>
            <div className='cardContainer'>
                <div className='row1'>
                    <div className='card1'>
                        <Card header={<CardTitle reveal image={'https://i.imgur.com/umi84B3.png'} waves='light'/>}
                            title="Flight Tracker"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href='https://flight-planner.herokuapp.com/'>View Project</a></p>
                        </Card>
                    </div>
                    <div className='context1'>
                        <p>context for card 1 goes here</p>
                    </div>
                </div>
                <div className='row2'>
                    <div className='card2'>
                        <Card header={<CardTitle reveal image={'https://i.imgur.com/dN1Kkv0.png'} waves='light'/>}
                            title="Music DB"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href='http://imusicdb.herokuapp.com/'>View Project</a></p>
                        </Card>
                    </div>
                    <div className='context2'>
                        <p>context for card 2 goes here</p>
                    </div>
                </div>
                <div className='row3'>
                    <div className='card3'>
                    </div>
                    <div>
                        <p>context for card 3 goes here</p>
                    </div>
                </div>
                <div className='row4'>
                    <div className='card4'>
                    </div>
                    <div>
                        <p>context for card 4 goes here</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;
