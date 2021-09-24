import { Collapse, Typography } from '@mui/material';
import React from 'react'
import './styles/Fraud.css';
import { IconContext } from "react-icons";
import { RiAlertLine } from "react-icons/ri";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Fraud = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    return (
        <div className="fraud">
            <div className="alert">
                <div className="header" onClick={handleClick}>
                    <div className="header1">
                        <IconContext.Provider value={{ color: '#945E12', size:'1.3em'}}>
                            <RiAlertLine/>
                        </IconContext.Provider>
                        <Typography sx={{fontSize: 16, fontWeight:500, color:'#945E12', pl:1}}>Facing an issue with an employer? Report suspicious behaviour</Typography>
                    </div>
                    <div>
                        {open? <ExpandLess sx={{color:'#945E12'}}/>:<ExpandMore sx={{color:'#945E12'}}/>}
                    </div>
                </div>
                <div>
                    <Collapse in = {open} unmountOnExit>
                        <div className="querries">
                            <Typography sx={{fontSize: 16, fontWeight:300, color:'#945E12'}}>Let us know if an employer has:</Typography>
                        </div>
                        <div className="querries">
                            <Typography sx={{fontSize: 16, fontWeight:300, color:'#945E12'}}>- Asked for money in the form of security deposit, laptop fee, etc.</Typography>
                        </div>
                        <div className="querries">
                            <Typography sx={{fontSize: 16, fontWeight:300, color:'#945E12'}}>- Made offensive comments.</Typography>
                        </div>
                        <div className="querries">
                            <Typography sx={{fontSize: 16, fontWeight:300, color:'#945E12'}}>- Posted incorrect job description or stipend/salary.</Typography>
                        </div>
                        <div className="querries">
                            <Typography sx={{fontSize: 16, fontWeight:300, color:'#945E12'}}>- Refused to issue an internship certificate or pay the promised stipend.</Typography>
                        </div>
                        <div className="querries">
                            <Typography sx={{fontSize: 16, fontWeight:300, color:'#945E12'}}>- Tried to get social media followers, app downloads or any other free work done, under the guise of assessment.</Typography>
                        </div>
                        <div className="report">
                            <a href='/'>
                                <Typography sx={{fontSize: 16, fontWeight:600, color:'#945E12'}}>Report Complaint</Typography>
                            </a>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Fraud
