import './form.css';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import Grid from '../Grid';

const Form = ({handleAdd, setTransactionsList, transactionList}) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    const HandleSave = () => {
        if(!desc || !amount){
            alert('Informe a descrição e o valor!')
        }else if (amount<1) {
            alert('O valor precisa ser positivo!')
            return
        }
    
        const generateID = () => {Math.round(Math.random()*1000)}

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc('')
        setAmount('')
    }
    return (
        <>
            <div className='form'>
                <TextField 
                    className='text-field'
                    label="Descrição" 
                    variant="standard"
                    type='text' 
                    name='descricao' 
                    id='descricao' 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder=''                    
                />
                <TextField 
                    className='text-field'
                    label="Valor" 
                    variant="standard"
                    type='text' 
                    name='valor' 
                    id='valor' 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder=''                    
                />
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel onChange={() => setIsExpense(isExpense)} value="entrada" control={<Radio/>} label="Entrada" />
                    <FormControlLabel onChange={() => setIsExpense(!isExpense)}value="saida" control={<Radio />} label="Saída" />
                </RadioGroup>
                <Button  variant="contained" onClick={HandleSave}>Adicionar</Button>
            </div>   
            <Grid itens={transactionList} setItens={setTransactionsList}></Grid>
        </>  
    )
}
export default Form