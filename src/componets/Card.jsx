import { Link } from 'react-router-dom'
import './Card.style.css'


const Card = ({ razao, produto, id }) => {
    return (
        <div className='card'>
            <div className='content'>
                <h3>{razao}</h3>
                <p>
                    <span>Produto: {produto}</span>
                </p>
                <div className='action'>
                    <Link to={`/detalhes/${id}`}>
                        <p>Detalhes</p>
                    </Link> 
                </div>
            </div>

        </div>
    )
}

export default Card