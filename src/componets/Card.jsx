import { Link } from 'react-router-dom'
import './Card.style.css'


const Card = ({ razao, produto, id }) => {
    return (
        <div className='card'>
            <div className='razao'>
                <p>{razao}</p>
            </div>
            <div className='produtos'>
                <p>{produto}</p>
            </div>
            <div className='details'>
                <Link to={`/detalhes/${id}`}>
                    <p>Detalhes do fornecedor</p>
                </Link>
            </div>



        </div>



    )
}

export default Card