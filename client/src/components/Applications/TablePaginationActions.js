import React from 'react'
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';

const TablePaginationActions = (props) => {
    const { count, page, rowsPerPage, onPageChange } = props;
    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
      };
    
      const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
      };
      const disabledFirst = page===0 ;
      const disabledLast = page >= Math.ceil(count / rowsPerPage) - 1;
    return (
        <div className="table-pagination">
            <IconButton
                onClick={handleBackButtonClick}
                disabled={disabledFirst}
                aria-label="previous page"
            >
                <KeyboardArrowLeft sx={{color:`${disabledFirst? '#666666':'#008BDC'}`, fontSize: '20px'}}/>
            </IconButton>
            <Typography sx={{fontSize: 14, fontWeight:500, color:'#666666'}}>{`${page+1}/${Math.ceil(count / rowsPerPage)}`}</Typography>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={disabledLast}
                aria-label="next page"
            >
                <KeyboardArrowRight sx={{color:`${disabledLast? '#666666':'#008BDC'}`, fontSize: '20px'}}/>
            </IconButton>
        </div>
    )
}
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
};

export default TablePaginationActions
