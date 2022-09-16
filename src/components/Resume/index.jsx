import react from 'react';
import './resume.css';
import CardBasic from '../CardBasic'


const Resume = () => {
    return (
        <div className='resume'>
            <CardBasic
                title='Entradas'
                value={0.00}
                icon={}
            />
            <CardBasic
                title='Saídas'
                value={0.00}
                icon={}
            />
            <CardBasic 
                title='Total'
                value={0.00}
                icon={}
            />
        </div>
    )
}

export default Resume