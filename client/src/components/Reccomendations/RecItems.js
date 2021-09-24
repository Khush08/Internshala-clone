import React from 'react'
import Android from '../assets/android.jpg';
import Web from '../assets/web-development.jpg'
import Python from '../assets/python.jpg';
import Hacking from '../assets/hacking.jpg';
import { Typography } from '@mui/material';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';

function createRows(image, course, subs, time){
    return {image, course, subs, time};
}

const rows = [
    createRows(Android, 'Android App Development', 'Build your own food ordering app', 8),
    createRows(Web, 'Web Development', 'Learn how to create a website from scratch', 8),
    createRows(Python, 'Programming with Python', 'Build a fantasy cricket game using Python language', 6),
    createRows(Hacking, 'Ethical Hacking', 'Learn to hack and secure web applications', 8)
];

const RecItems = () => {
    return (
        <div className="reccomends-items">
            {
                rows.map(row => 
                    <div className="items-card">
                        <div className="course">
                            <img src={row.image} alt={row.course} />
                            <Typography sx={{fontSize: '16px', fontWeight:600, color:'#666666', mt:'16px', mb:'6px'}}>
                                {row.course}
                            </Typography>
                            <Typography sx={{fontSize: '14px', fontWeight:400, color:'#484848'}}>
                                {row.subs}
                            </Typography>
                        </div>
                        <div className="duration">
                            <div className="dur-labels-l"> 
                            <Typography sx={{fontSize: '12px', fontWeight:400, color:'#666666'}}>
                                Duration
                            </Typography>
                            <Typography sx={{fontSize: '12px', fontWeight:500, color:'#666666'}}>
                                {`: ${row.time} weeks`}
                            </Typography>
                            </div>
                            <div className="dur-labels-r">
                                <Typography sx={{fontSize: '14px', fontWeight:600, color:'#008BDC', mr:1}}>
                                    Know more
                                </Typography>
                                <ChevronRightOutlined sx={{color:'#008BDC'}} />
                            </div>
                        </div>      
                    </div>
                )
            }
        </div>
    )
}

export default RecItems
