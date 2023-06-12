import React from 'react'
import marvel from '../Images/marvel.jpg'

const Header = () => {
    return (
        <div className='header' >
            <div className='top1'>
                <div className="mark">
                    MARK
                </div>

                <div className="marvel">
                    <img src={marvel} alt="" />
                 
                </div>

                <div className="search">
                    <div className="subscribe">
                        MARVEL UNLIMITED <br /> SUBSCRIBE
                    </div>
                    <div className="searchimage">
                    search
                    </div>
                </div>

            </div>

            <div className='top2'>
                <ul>
                    <li>NEWS</li>
                    <li>COMICS</li>
                    <li>CHARACTERS</li>
                    <li>Movies</li>
                    <li>Tv SHOWS</li>
                    <li>GAMES</li>
                    <li>VIDEOS</li>
                    <li>MORE</li>
                </ul>
            </div>

            <div className='top3'>
                <ul>
                    <li>DEVELOPER PORTAL  |</li>
                    <li>How-Tos</li>
                    <li>INTERACTIVE DOCUMENTATION</li>
                    <li>MY Developer ACCOUNT</li>
                    <li>HELP</li>
                    <li>NEWS and UPDATES</li>
                </ul>
            </div>
        </div>
    )
}

export default Header