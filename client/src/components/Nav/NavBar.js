import React from 'react'
import logo from '../assets/logo.svg';
import './styles/NavBar.css';
import {Stack, Typography } from '@mui/material';
import Interships from './Internships';
import OnlineTrainings from './OnlineTrainings';
import Bookmark from './Bookmark';
import Chats from './Chats';
import AvatarBatch from './AvatarBatch';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';


const NavBar = () => {
    const [internships, setInternships] = React.useState(false);
    const [trainings, setTrainings] = React.useState(false);
    const [freshers, setFreshers] = React.useState(false);
    const internIn = () => {
        setInternships(true);
    }
    const internOut = () => {
        setInternships(false);
    }
    const trainingIn = () => {
        setTrainings(true);
    }
    const trainingOut = () => {
        setTrainings(false);
    }
    const freshIn = () =>{
        setFreshers(true);
    }
    const freshOut = () =>{
        setFreshers(false);
    }
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="fallback"></div>
            <div className="items">
                <Stack direction="row" spacing={5}>
                    <Stack direction="row" spacing={5}>
                        <div className="internships" onMouseEnter={internIn} onMouseLeave={internOut}>
                            <div className="topLabels">
                            <Typography 
                                sx={{fontSize: 14, fontFamily:400, color: `${!internships? '#666666':'#008BDC'}`}}> 
                                Internships
                            </Typography>
                            {!internships? <ArrowDropDownSharpIcon sx={{ color: '#666666' }} />:<ArrowDropUpSharpIcon sx={{ color: '#008BDC' }} />}
                            </div>
                            <Interships open={internships} mouseIn={internIn} mouseOut={internOut}/>
                        </div>
                        <div className="trainings" onMouseEnter={trainingIn} onMouseLeave={trainingOut}>
                            <div className="topLabels">
                            <Typography 
                                sx={{fontSize: 14, fontFamily:400, color: `${!trainings? '#666666':'#008BDC'}`}}> 
                                Online Trainings
                            </Typography>
                            <div className="contest">
                                <Typography 
                                    sx={{color:'#ffffff', fontSize: 12, fontWeight:500}}>
                                        OFFER
                                </Typography>
                            </div>
                            {!trainings? <ArrowDropDownSharpIcon sx={{ color: '#666666' }} />:<ArrowDropUpSharpIcon sx={{ color: '#008BDC' }} />}
                            </div>
                            <OnlineTrainings open={trainings} mouseIn={trainingIn} mouseOut={trainingOut}/>
                        </div>
                        <div className="jobs" onMouseEnter={freshIn} onMouseLeave={freshOut}>
                            <div className="topLabels">
                            <Typography 
                                sx={{fontSize: 14, fontFamily:400, color: `${!freshers? '#666666':'#008BDC'}`}}> 
                                Fresher Jobs
                            </Typography>
                            </div>
                        </div>
                        
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <Bookmark />
                        <Chats />
                        <AvatarBatch />
                    </Stack>
                </Stack>
        
            </div>
    
        </div>
    )
}

export default NavBar
