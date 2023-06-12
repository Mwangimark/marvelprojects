import React from 'react'
import marvelfooter from '../Images/marvelfooter.jpg'

const Foot = () => {
    return (
        <div className="footer">
            <div className="footerup">
                <div className="words">
                    <h6>NO CREDIT CARD REQUIRED</h6>
                    <h3>Start Using Marvel today</h3>
                    <input type="text" placeholder='Your Email' />
                </div>
                <div className="footerimage">
                    <img src={marvelfooter} alt="" />
                </div>
            </div>
            
            <div className="footerdown">
                    <div className="footermarvel">
                        <h3>MARVEL</h3>
                        <h5>Your best online entertainment movies and series </h5>
                    </div>
                    <div className="footerlist">
                        <ul>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Docs</li>
                        </ul>
                    </div>
                    <div className="footerpolicy">
                        <ul>
                            <li>Terms and Condition</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            </ul>
                    </div>
                    <div className="footerpages">
                        <ul>
                            <li><b>Let's chat</b></li>
                            <li>marvel@marvel.com</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Foot