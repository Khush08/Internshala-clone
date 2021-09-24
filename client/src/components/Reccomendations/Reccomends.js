import React from 'react'
import { Typography } from '@mui/material'
import './styles/Reccomends.css';
import RecItems from './RecItems';

const Reccomends = () => {
    return (
        <div className="reccomends">
            <Typography sx={{fontSize:'28px', fontWeight: 700, color:'#333333', mb:'16px'}}>
                Recommended trainings for you
            </Typography>
            <Typography sx={{fontSize:'16px', fontWeight: 500, color:'#666666', mb:'16px'}}>
                These recommendations are based on your profile and application history
            </Typography>
            <RecItems />
        </div>
    )
}

export default Reccomends
