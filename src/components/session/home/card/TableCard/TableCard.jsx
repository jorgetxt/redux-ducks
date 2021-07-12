import React, {useEffect} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import {obtenerGetCardsAction } from "../../../../../redux/getCards";
import {obtenerDeleteCardaAction, obtenerDeleteCardAction } from "../../../../../redux/deleteCard";

import {obtenerGetCardSelectedAction } from "../../../../../redux/getCardSelected";
import AddIcon from '@material-ui/icons/Add';


import EnhancedTableToolbar from './TableToolbar/TableToolbar'
import EnhancedTableHead from './tableHead/TableHead'
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './Style'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'





// table head-----------------------




//-----toolbar



export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

//redux--------------------------

const sendDataTable = ()=>{
  getCardsData.map((item)=>{
    rows.push(createData(item.english, item.spanish))
  })

}

const dispatch = useDispatch();
const getCardsData = useSelector((store) => store.getCards.array);



useEffect(async() => {
  await dispatch(obtenerGetCardsAction())
  sendDataTable()
  console.log(rows, "rows")

},  [console.log(getCardsData)])

    //redux getCardSelected

  const getCardSelectedData = useSelector((store) => store.getCardSelected.array);



 ///-------------------------

 function createData(english, spanish, level, _id, protein) {
  return { english, spanish, level, _id, protein };
}
const rows = getCardsData;



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}




 /////-------------------------handle Delete Card 

 const handleDeleteCard=(_id)=>{
  dispatch(obtenerDeleteCardAction(_id))
  dispatch(obtenerGetCardsAction())
 }



///----------------------------
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.english);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
  
  


  return (
    <div className={classes.root}>
       
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.english);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  return (
                    
                    <TableRow
                      hover
                      //aqui se selecciona la celda
                      onClick = {()=>dispatch(obtenerGetCardSelectedAction({"english": row.english,"spanish": row.spanish}))}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.english}
                      selected={isItemSelected}
                    >
                      <Link to={"/home/Cards/"+row._id} style={{textDecoration:"inherit", color: "inherit"}}>
                      <TableCell padding="checkbox">
                        <Checkbox

                        onClick={(event) => handleClick(event, row.english)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.english}
                      </TableCell>
                      <TableCell >{row.spanish}</TableCell>
                      <TableCell >{row.level}</TableCell>
                      <TableCell > <Link><EditIcon></EditIcon></Link>   <Link onClick= {()=>handleDeleteCard(row._id)}><DeleteIcon></DeleteIcon></Link> </TableCell>
                      </Link>
                    </TableRow>
                    
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
