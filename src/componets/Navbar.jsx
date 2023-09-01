import { Link } from "react-router-dom"
import './Navbar.style.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="list">
                <li className="item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="item">
                    <Link to='/fornecedores'>Fornecedores</Link>
                </li>
                <li className="item">
                    <Link to='/empresa'>Empresa</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar