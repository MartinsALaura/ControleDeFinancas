import react from 'react';
import './resume.css';
import CardBasic from '../CardBasic';
import { 
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign 
  } from 'react-icons/fa'


const Resume = () => {
    return (
        <div className='resume'>
            <CardBasic
                Title='Entradas'
                Value={1000.95}
                Icon={FaRegArrowAltCircleDown}
            />
            <CardBasic
                Title='Saídas'
                Value={300}
                Icon={FaRegArrowAltCircleUp}
            />
            <CardBasic 
                Title='Total'
                Value={0}
                Icon={FaDollarSign }
            />
        </div>
    )
}
export default Resume