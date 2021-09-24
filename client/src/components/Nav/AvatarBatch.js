import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Typography, ListItemButton} from '@mui/material';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import StarRateRounded from '@mui/icons-material/StarRateRounded';
import './styles/AvatarBatch.css'

const AvatarBatch = () => {
    const [hover, setHover] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [ma, setMa] = React.useState(false);
    const setEnter = () => {
        setHover(true);
    }
    const setLeave = () => {
        setMa(false);
        setOpen(false);
        setHover(false);
        
    }
    const handleClick = () => {
      setOpen(!open);
    };
    const handleMa = () => {
      setMa(!ma);
    };
    return (
        <div className="avatar" onMouseEnter={setEnter} onMouseLeave={setLeave}>
            <div className="topLabels">
                <Avatar 
                    sx={{ 
                        width: 24, 
                        height: 24,
                        backgroundColor: '#ffffff',
                        border: 1,
                        borderColor: `${!hover? '#666666':'#008BDC'}`
                    }}
                >
                    <Typography sx={{fontSize: 12, fontFamily:500, color: `${!hover? '#666666':'#008BDC'}`}}>
                        K
                    </Typography>
                </Avatar>
                {!hover? <ArrowDropDownSharpIcon sx={{ color: '#666666' }} />:<ArrowDropUpSharpIcon sx={{ color: '#008BDC' }} />}
            </div>
            <div>
                <Collapse in={hover} onMouseEnter={setEnter} onMouseLeave={setLeave} className="drop-av">
                    <nav>
                        <div className="info">
                            <Typography sx={{color: '#484848', fontSize: 14, fontFamily:500}}>Khush Dassani</Typography>
                            <Typography sx={{color:'#484859', fontSize: 14, fontFamily:500}}>khushdassani08@gmail.com</Typography>
                        </div>
                    </nav>
                    <Divider />
                    <nav>
                        <div className="rating-panel">
                            <div> 
                                <StarRateRounded sx={{ color: '#FFC200' }} />
                            </div>
                            <div className="rating">   
                                <div>
                                    <Typography sx={{fontSize: 14, fontFamily:500}}>
                                        4.0
                                    </Typography>
                                </div>
                                <div className="know-more">
                                    <Typography sx={{fontSize: 14, fontFamily:500}}>Know More</Typography>
                                    <KeyboardArrowRightSharpIcon />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Divider />
                    <nav>
                        <div className="hover-labels">
                            <Typography sx={{fontSize: 14, fontFamily:500}}>My Application</Typography>
                        </div>
                        <div className="hover-labels">
                            <Typography sx={{fontSize: 14, fontFamily:500}}>Edit Resume</Typography>
                        </div>
                        <div className="hover-labels">
                            <Typography sx={{fontSize: 14, fontFamily:500}}>Edit Preferences</Typography>
                        </div >
                        <div className="hover-labels">
                            <Typography sx={{fontSize: 14, fontFamily:500}}>Safety Tips</Typography>
                        </div>
                        <div className="hover-labels">
                            <Typography sx={{fontSize: 14, fontFamily:500}}>Help Center</Typography>
                        </div>
                        <div>
                            <List>
                                <ListItemButton onClick={handleClick} >
                                    <div className="sectional-btns">
                                        <Typography sx={{fontSize:14, fontWeight:500}}>More</Typography>
                                        {open? <ExpandLess />:<ExpandMore />}
                                    </div>
                                </ListItemButton>
                            </List>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }} onClick={handleMa}>
                                        <div className="sectional-btns">
                                            <Typography sx={{fontSize:14, fontWeight:500}}>Manage Account</Typography>
                                            {ma? <ExpandLess />:<ExpandMore />}
                                        </div>
                                    </ListItemButton>
                                    <Collapse in={ma} timeout="auto" unmountOnExit sx={{pl:4}}>
                                    <div className="hover-labels">
                                        <Typography sx={{fontSize: 14, fontFamily:500}}>Change Password</Typography>
                                    </div>
                                    <div className="hover-labels">
                                        <Typography sx={{fontSize: 14, fontFamily:500}}>Change Email Address</Typography>
                                    </div>
                                    <div className="hover-labels">
                                        <Typography sx={{fontSize: 14, fontFamily:500}}>Delete My Account</Typography>
                                    </div>
                                    </Collapse>
                                    <ListItemButton sx={{pl:2}}>
                                        <div className="hover-labels">
                                            <Typography sx={{fontSize: 14, fontFamily:500}}>Logout</Typography>
                                        </div>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </div>
                    </nav>
                </Collapse>
            </div>

        </div>
    )
}

export default AvatarBatch
