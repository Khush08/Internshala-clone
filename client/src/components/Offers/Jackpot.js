import React from 'react'
import jackpot from '../assets/jackpot.png';
import './styles/Jackpot.css'
const Jackpot = () => {
    return (
        <div className="jackpot-image">
            <a href="/">
                <img src={jackpot} alt="banner" />
            </a>
        </div>
    )
}

export default Jackpot
