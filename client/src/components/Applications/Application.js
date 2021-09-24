import React from 'react'
import Data from './Data'
import { Typography } from '@mui/material'
import './styles/Application.css';
const Application = () => {
    return (
        <div className="application">
            <div className="header-app">
                <Typography sx={{fontSize: 28, fontWeight:600, lineHeight:1.2, color:'#333333'}}>My applications</Typography>
            </div>
            <div className="tableContainer">
                <Data />
            </div>
        </div>
    )
}

export default Application
