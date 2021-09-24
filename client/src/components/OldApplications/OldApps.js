import React from 'react'
import { Typography } from '@mui/material'
import { IconContext } from "react-icons";
import { FiArrowRight } from "react-icons/fi";
import './styles/OldApps.css';

const OldApps = () => {
    return (
        <div className="old-apl">
            <Typography sx={{fontSize: 14, fontWeight:500, color:'#008BDC', mr:'1px'}}>View old applications</Typography>
            <IconContext.Provider value={{ color: '#008BDC', size:'1em'}}>
                <FiArrowRight />
            </IconContext.Provider>
        </div>
    )
}

export default OldApps
