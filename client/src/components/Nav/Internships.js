import React from 'react'
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';

import './styles/Dropdowns.css';


const Interships = props => {
    const internships = [
        {type: 'Location', index: 0},
        {type: 'Profile', index: 1},
        {type: 'Category', index: 2}
    ];
    const subTypes = [
        ['Work from Home', 'Internships in Bangalore', 'Internships in Dehli','Internships in Hyderabad', 'Internships in Mumbai', 'Internships in Chennai','Internships in Pune', 'Internships in Kolkata', 'Internships in Jaipur','Internshala Internships'],
        ['Computer Science Internship', 'Marketing Internship', 'Finance Internship','Graphic Design Internship', 'Architecture Internship', 'Mechanical Internship','HR Internship', 'Digital Marketing Internship','Law Internship', 'Electronics Internship','Content Writing Internship','Civil Internship','Campus Ambassador Program'],
        ['Engineering Internship', 'MBA Internship', 'Part-Time Jobs/Internships', 'Humanities Internship', 'Science Internship', 'Internships with Job Offer', 'Internships for Women']        
    ];
    const [subs, setSubs] = React.useState(subTypes[0]);
    const setRightPane = index => {
        setSubs(subTypes[index]);
    }
    const handleIn = () => {
        props.mouseIn();
    }
    const handleOut = () => {
        props.mouseOut();
    }
    return (
            <div >
                <Collapse in={props.open} unmountOnExit 
                    onMouseEnter={handleIn} onMouseLeave = {handleOut} className="drop"
                >
                <div className="dropdowns">
                <List component="div" className="dropdown-list-left">
                    {
                        internships.map(data => 
                            <ListItemButton onMouseEnter = {() => setRightPane(data.index)}
                                className="dropdown-left-labels"
                            >
                                <Typography  sx={{fontSize: 12, fontFamily:400}}>{data.type}</Typography>
                            </ListItemButton>
                        )
                    }
                </List>
                <List component="div" className="dropdown-list-right">
                    {
                        subs.map(data => 
                            <ListItemButton
                                disableRipple
                                disableTouchRipple
                                className="dropdown-right-labels"
                            >
                                <Typography 
                                sx={{fontSize: 12, fontFamily:400}}>{data}</Typography>
                            </ListItemButton>
                        )
                    }
                    <ListItemButton
                        disableRipple
                        disableTouchRipple
                        className="dropdown-right-labels"
                    >
                        <Typography sx={{fontSize: 12, fontWeight:500, color:'#000000'}}>View all internships</Typography>
                    </ListItemButton>
                </List>
                </div>
            </Collapse>
            </div>
    )
}

export default Interships
