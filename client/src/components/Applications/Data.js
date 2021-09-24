import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody} from '@mui/material'
import { tableCellClasses } from "@mui/material/TableCell";
import { IconContext } from "react-icons";
import { BiFile, BiHelpCircle } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import TablePaginationActions from './TablePaginationActions';

function createData(company, profile, type, date, applicants, status) {
    const st = 
    status==="Applied"? "applied":
    status==="Not selected"? "notSelected":
    status==="In-touch"? "inTouch":"unlikely";
    return { company, profile, type, date, applicants, status, st };
  }
  
const rows = [
    createData('Infigon Futures', 'Web Development (React)', "Internship", "20 Sep' 21", 74, "Applied"),
    createData('GrowthGear', '	Full Stack Development', "Internship", "20 Sep' 21", 89, "Not selected"),
    createData('Circuit Branch Solutions', 'Mobile App Development', "Internship", "20 Sep' 21", 107, "Applied"),
    createData('GoalSmacker Private Limited', 'Mobile App Development', "Internship", "20 Sep' 21", 19, "Applied"),
    createData('Bit Brothers', 'Front End Development', "Internship", "20 Sep' 21", 313, "In-touch"),
    createData('Infuzex Ventures', 'Web Development', "Internship", "20 Sep' 21", 37, "Not selected"),
    createData('HAWC R&D PRIVATE LIMITED', 'Web Development', "Internship", "7 Sep' 21", 87, "Not selected"),
    createData('Inayat', 'Web Development', "Internship", "7 Sep' 21", 202, "Not selected"),
    createData('OneVarsity Edtech Private Limited', 'Web Development', "Internship", "13 Aug' 21", 209, "Response unlikely"),
    createData('NeuroTech Labs', 'Web Development', "Internship", "13 Aug' 21", 203, "Response unlikely"),
    createData('Arbunize Digital Media Private Limited', 'React Native Development', "Internship", "13 Aug' 21", 42, "Response unlikely"),
    createData('Applore Technologies', 'React Native Development', "Internship", "9 Jul' 21", 69, "Response unlikely")
];

const Data = () => {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    return (
        <div className="table-custom">
            <TableContainer>
                <Table sx={{
                    [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none"
                    }
                }}>
                    <TableHead sx={{border:"none",borderBottom: "none", boxShadow:"none"}}>
                        <TableRow >
                            <TableCell  sx={{width: '165px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    COMPANY
                                </Typography>
                            </TableCell>
                            <TableCell align="left" sx={{width: '180px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    PROFILE
                                </Typography>
                            </TableCell>
                            <TableCell align="left" sx={{width: '110px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    EMPLOYMENT TYPE
                                </Typography>
                            </TableCell>
                            <TableCell align="left" sx={{width: '110px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    APPLIED ON
                                </Typography>
                            </TableCell>
                            <TableCell align="left" sx={{width: '80px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    NUMBER OF APPLICANTS
                                </Typography>
                            </TableCell>
                            <TableCell align="left" sx={{width: '160px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    APPLICATION STATUS
                                </Typography>
                            </TableCell>
                            <TableCell align="left" sx={{width: '80px', pr:'30px'}}>
                                <Typography sx={{fontSize: 12, fontWeight: 500, color:'#666666'}}>
                                    REVIEW APPLICATION
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map(row =>
                                <TableRow >
                                <TableCell  sx={{width: '165px', pr:'15px'}}>
                                    <Typography sx={{fontSize: 14, fontWeight: 500, color:'#666666'}}>
                                        {row.company}
                                    </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{width: '180px', pr:'30px'}}>
                                    <div className="profile">
                                        <Typography sx={{fontSize: 14, fontWeight: 500, color:'#666666', ml: '8px'}}>
                                            {row.profile}
                                        </Typography>
                                        <IconContext.Provider value={{ color: '#008BDC', size:'1em'}}>
                                            <FiExternalLink/>
                                        </IconContext.Provider>
                                    </div>
                                </TableCell>
                                <TableCell align="left" sx={{width: '110px', pr:'30px'}}>
                                    <Typography sx={{fontSize: 14, fontWeight: 500, color:'#666666'}}>
                                        {row.type}
                                    </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{width: '110px', pr:'30px'}}>
                                    <Typography sx={{fontSize: 14, fontWeight: 500, color:'#666666'}}>
                                        {row.date}
                                    </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{width: '80px', pr:'30px'}}>
                                    <Typography sx={{fontSize: 14, fontWeight: 500, color:'#666666'}}>
                                        {row.applicants}
                                    </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{width: '160px', pr:'30px'}}>
                                    <div className='status'>
                                        <div className={`badge ${row.st}`}>
                                            <Typography sx={{fontSize: 14, fontWeight: 500}}>
                                                {row.status}
                                            </Typography>
                                        </div>
                                        <IconContext.Provider value={{ color: '#008BDC', size:'1em'}}>
                                            <BiHelpCircle />
                                        </IconContext.Provider>
                                    </div>
                                </TableCell>
                                <TableCell align="left" sx={{width: '80px', pr:'30px'}}>
                                    <IconContext.Provider value={{ color: '#008BDC', size:'1.5em'}}>
                                        <BiFile/>
                                    </IconContext.Provider>
                                </TableCell>
                            </TableRow>
                            
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginationActions
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
        </div>
    )
}

export default Data
