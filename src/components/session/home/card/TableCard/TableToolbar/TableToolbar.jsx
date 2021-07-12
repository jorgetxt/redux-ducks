import React, {useEffect} from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import useToolbarStyles from './Styles'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';




const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
            
          </Typography>
        ) : (
          
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Cards
            
          </Typography>
          
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddIcon></AddIcon>}
        margin= "normal"
      >
       addcard
      </Button>
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
  export default EnhancedTableToolbar;