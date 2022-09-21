import react from 'react';
import './resume.css';
import CardBasic from '../CardBasic';
import { 
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign 
  } from 'react-icons/fa'

const Resume = ({income, expense, total}) => {
    return (
        <div className='resume'>
            <CardBasic
                className='Card'
                Title='Entradas'
                Value={income}
                Icon={FaRegArrowAltCircleDown}
            />
            <CardBasic
                className='Card'
                Title='Saídas'
                Value={expense}
                Icon={FaRegArrowAltCircleUp}
            />
            <CardBasic 
                className='Card'
                Title='Total'
                Value={total}
                Icon={FaDollarSign }
            />
        </div>
    )
}
export default Resume