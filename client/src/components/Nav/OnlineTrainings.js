import React from 'react'
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';

const OnlineTrainings = (props) => {
    const trainings = [
        {type: 'Programming', index: 0},
        {type: 'Business & Management', index: 1},
        {type: 'Core Engineering', index: 2},
        {type: 'Data Science', index: 3},
        {type: 'Design', index: 4},
        {type: 'Creative Arts', index: 5},
        {type: 'Language', index: 6},
        {type: 'Career Development', index: 7},
        {type: 'Architecture', index: 8},
        {type: 'Specializations', index: 9}
    ];
    const subTypes = [
        ['Work from Home', 'Internships in Bangalore', 'Internships in Dehli','Internships in Hyderabad', 'Internships in Mumbai', 'Internships in Chennai','Internships in Pune', 'Internships in Kolkata', 'Internships in Jaipur','Internshala Internships'],
        ['Computer Science Internship', 'Marketing Internship', 'Finance Internship','Graphic Design Internship', 'Architecture Internship', 'Mechanical Internship','HR Internship', 'Digital Marketing Internship','Law Internship', 'Electronics Internship','Content Writing Internship','Civil Internship','Campus Ambassador Program'],
        ['Engineering Internship', 'MBA Internship', 'Part-Time Jobs/Internships', 'Humanities Internship', 'Science Internship', 'Internships with Job Offer', 'Internships for Women'] ,
        ['Work from Home', 'Internships in Bangalore', 'Internships in Dehli','Internships in Hyderabad', 'Internships in Mumbai', 'Internships in Chennai','Internships in Pune', 'Internships in Kolkata', 'Internships in Jaipur','Internshala Internships'],
        ['Computer Science Internship', 'Marketing Internship', 'Finance Internship','Graphic Design Internship', 'Architecture Internship', 'Mechanical Internship','HR Internship', 'Digital Marketing Internship','Law Internship', 'Electronics Internship','Content Writing Internship','Civil Internship','Campus Ambassador Program'],
        ['Engineering Internship', 'MBA Internship', 'Part-Time Jobs/Internships', 'Humanities Internship', 'Science Internship', 'Internships with Job Offer', 'Internships for Women'] ,
        ['Work from Home', 'Internships in Bangalore', 'Internships in Dehli','Internships in Hyderabad', 'Internships in Mumbai', 'Internships in Chennai','Internships in Pune', 'Internships in Kolkata', 'Internships in Jaipur','Internshala Internships'],
        ['Computer Science Internship', 'Marketing Internship', 'Finance Internship','Graphic Design Internship', 'Architecture Internship', 'Mechanical Internship','HR Internship', 'Digital Marketing Internship','Law Internship', 'Electronics Internship','Content Writing Internship','Civil Internship','Campus Ambassador Program'],
        ['Engineering Internship', 'MBA Internship', 'Part-Time Jobs/Internships', 'Humanities Internship', 'Science Internship', 'Internships with Job Offer', 'Internships for Women'] ,
        ['Work from Home', 'Internships in Bangalore', 'Internships in Dehli','Internships in Hyderabad', 'Internships in Mumbai', 'Internships in Chennai','Internships in Pune', 'Internships in Kolkata', 'Internships in Jaipur','Internshala Internships']
    ];
    const [subs, setSubs] = React.useState(subTypes[0]);
    const handleIn = () => {
        props.mouseIn();
    }
    const handleOut = () => {
        props.mouseOut();
    }
    const setRightPane = index => {
        setSubs(subTypes[index]);
    }
    return (
        <div>
            <Collapse in={props.open} unmountOnExit 
                onMouseEnter={handleIn} onMouseLeave = {handleOut} className="drop-t"
            >
                <div className="dropdowns-t">
                <List component="div" className="dropdown-list-left-t">
                    {
                        trainings.map(data => 
                            <ListItemButton onMouseEnter = {() => setRightPane(data.index)}
                                className="dropdown-left-labels-t"
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

export default OnlineTrainings
