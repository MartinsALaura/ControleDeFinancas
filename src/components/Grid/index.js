import './grid.css';
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
} from 'react-icons/fa'
import { Masks } from '@mui/icons-material';
import GridItem from '../GridItem';

const Grid = ({itens, setItens}) => {
    const columns = [
        { id: 'descricao', label: 'Descrição', minWidth: 40, align:'right' },
        { id: 'valor', label: 'Valor', minWidth: 40, align:'right' },
        { id: 'tipo', label: 'Tipo', minWidth: 10, align:'center' },
        { id: 'delete', label: 'Delete', minWidth: 10, align:'' },
    ];
      
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID)
        setItens (newArray)
        localStorage.setItem('transactions', JSON.stringify(newArray))
    }
      
    const rows = [];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
      
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
      
    return (
        <div className='grid'>
            <Paper sx={{ width: '100%', overflow: 'hidden'}}>
                <TableContainer sx={{ maxHeight: 1050 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align='center'
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {itens?.map((item, index) => (
                                <GridItem key={index} item={item} onDelete={onDelete}/>           
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={10}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
        );
    }
export default Grid