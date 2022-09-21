import Button from '@mui/material/Button';
import { AuthContext } from '../../context';
import './home.css';
import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header'
import Resume from '../../components/Resume';
import Form from '../../components/Form';
import Grid from '../../components/Grid'
 
const HomePage = () => {
    const { logout } = useContext(AuthContext);    
    
    const handleLogout = () => {
        logout();
    }

    const data = localStorage.getItem("transactions")
    
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    )

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        
        //Filtro das Saídas 
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount))

        //Filtro das Entradas
        const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount))

        //Total Saídas
        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
        
        //Total Entradas
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)
        
        //Total
        const total = Math.abs(income - expense).toFixed(2)

        setIncome(`R$ ${income}`)
        setExpense(`R$ ${expense}`)
        setTotal(`${Number(income) < Number(expense)? '-': ''}R$ ${total}`)
    }, [transactionsList])

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction]
        setTransactionsList(newArrayTransactions)
        localStorage.setItem("transactions", JSON.stringfy(newArrayTransactions))
    }

    return (
        <div className='home-page'>
            <Header/>
            <Resume
                income={income}
                expense={expense}
                total={total}
            /><br/>
            <Form handleAdd={handleAdd} transactionsList={ transactionsList} setTransactionsList={setTransactionsList}/><br></br>
            <Grid itens={transactionsList} setItens={setTransactionsList}></Grid>
            <Button variant="outlined" onClick={handleLogout}>logout</Button>
        </div>
    )
}
export default HomePage;