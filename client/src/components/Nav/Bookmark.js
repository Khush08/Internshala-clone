import React from 'react'
import { BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons";
const Bookmark = () => {
    const [hover, setHover] = React.useState(false);
    const setEnter = () => {
        setHover(true);
    }
    const setLeave = () => {
        setHover(false);
    }
    return (
        <div onMouseEnter={setEnter} onMouseLeave={setLeave}>
            <IconContext.Provider value={{ color: `${hover? '#008BDC': '#666666'}`, size:'1.3em'}}>
                <BsBookmark/>
            </IconContext.Provider>
        </div>
        
    )
}

export default Bookmark
