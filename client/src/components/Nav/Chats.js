import React from 'react'
import msg from '../assets/msg.svg';
import msghover from '../assets/msghover.svg';

const Chats = () => {
    const [hover, setHover] = React.useState(false);
    const setEnter = () => {
        setHover(true);
    }
    const setLeave = () => {
        setHover(false);
    }
    return (
        <div onMouseEnter={setEnter} onMouseLeave={setLeave}>
            {!hover? 
                <img src={msg} alt="logo" />:
                <img src={msghover} alt="logo" />
            }
        </div>
    )
}

export default Chats
