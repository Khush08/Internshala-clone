import { Typography } from '@mui/material'
import React from 'react'
import './styles/Footer.css'
import { IconContext } from "react-icons";
import { RiGooglePlayLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const data = [
    ['Internship in India', 'Internship in Delhi', 'Internship in Bangalore', 'Internship in Hyderabad',
     'Internship in Mumbai', 'Internship in Chennai', 'Internship in Gurgaon', 'Internship in Kolkata',
     'Virtual internship'],
    ['Computer Science Internship', 'Electronics Internship', 'Mechanical Internship', 'Civil Internship', 'Marketing Internship', 'Chemical Internship', 'Finance Internship', 'Summer Research Fellowship', 'Campus Ambassador Program'],
    ['Programming with Python', 'Digital Marketing', 'Web Development', 'Machine Learning','Advanced Excel', 'Ethical Hacking', 'AutoCAD', 'Creative Writing', 'Data Science'],
    ['About us', 'We\'re hiring', 'Hire interns for your company', 'Team Diary', 'Blog', 'Our Services', 'Terms & Conditions', 'Privacy', 'Contact us']
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-up">
                <div className="footer-labels">
                    <Typography sx={{fontSize:'16px', fontWeight:600, mb:'16px'}}>
                        Internships by places
                    </Typography>
                    {
                        data[0].map(places =>
                            <Typography sx={{fontSize:'14px', fontWeight:500, mb:'8px'}}>{places}</Typography>
                        )
                    }
                
                </div>
                <div className="footer-labels">
                    <Typography sx={{fontSize:'16px', fontWeight:600, mb:'16px'}}>
                        Internship by Stream
                    </Typography>
                    {
                        data[1].map(places =>
                            <Typography sx={{fontSize:'14px', fontWeight:500, mb:'8px'}}>{places}</Typography>
                        )
                    }
                </div>
                <div className="footer-labels">
                    <div className="topLabels-footer">
                        <Typography 
                            sx={{fontSize:'16px', fontWeight:600}}> 
                            Online Trainings
                        </Typography>
                        <div className="contest">
                            <Typography 
                                sx={{color:'#ffffff', fontSize: 12, fontWeight:500}}>
                                    OFFER
                            </Typography>
                        </div>
                    </div>
                    {
                        data[2].map(places =>
                            <Typography sx={{fontSize:'14px', fontWeight:500, mb:'8px'}}>{places}</Typography>
                        )
                    }
                </div>
                <div className="footer-labels">
                    <Typography sx={{fontSize:'16px', fontWeight:600, mb:'16px'}}>
                        About Internshala
                    </Typography>
                    {
                        data[3].map(places =>
                            <Typography sx={{fontSize:'14px', fontWeight:500, mb:'8px'}}>{places}</Typography>
                        )
                    }

                </div>
            </div>
            <div className="footer-down">
                <div className="playstore">
                    <IconContext.Provider value={{ color: '#ffffff', size:'24px'}}>
                            <RiGooglePlayLine />
                    </IconContext.Provider>
                    <Typography sx={{fontSize:'14px', fontWeight:600, ml:'2px'}}>
                        Get Android App
                    </Typography>
                </div>
                <InstagramIcon sx={{size: '24px', ml:'25px'}}/>
                <TwitterIcon sx={{size: '24px', ml:'25px'}}/>
                <YouTubeIcon sx={{size: '24px', ml:'25px', mr:'25px'}}/>
                <IconContext.Provider value={{ color: '#ffffff', size:'24px'}}>
                    <FiLinkedin />
                </IconContext.Provider>
            </div>
            
        </div>
    )
}

export default Footer
