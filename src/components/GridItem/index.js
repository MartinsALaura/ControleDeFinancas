import React from "react";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const GridItem = ({ item, onDelete }) => {
    return (
        <TableRow>
            <TableCell>{item.desc}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell align='center'>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color='red'/>
                ) : (
                    <FaRegArrowAltCircleUp color='green'/>
                )}
            </TableCell>
            <TableCell align='center'>
                <FaTrash onClick={() => onDelete(item.id)}></FaTrash>
            </TableCell>
        </TableRow>
    )
}
export default GridItem