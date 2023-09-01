import { useEffect, useState } from "react"
import axiosFetch from "../../axios/axiosConfig"
import { Link, useParams, useNavigate } from "react-router-dom"
import './FornecedorDetails.css'


const FornecedorDetails = () => {

    const navigate = useNavigate()

    const deletarFornecedor = async (id) => {
        await axiosFetch.delete(`/deletarfornecedor/${id}`, {
            id: id
        })
            .then((response) => {
                console.log(response)
                alert('Fornecedor removido')
                navigate('/fornecedores')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [fornecedor, setFornecedor] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axiosFetch.get(`/listarfornecedor/${id}`)
            .then((response) => {
                const data = response.data.fornecedor
                setFornecedor(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div className="container" key={id}>
            <div className="detalhes">
                <h1>{fornecedor.razao}</h1>
                <div className="info">
                    <p>
                        Produto fornecido: <span>{fornecedor.produto}</span>
                    </p>
                    <p>
                        Endereço: <span>{fornecedor.end}</span>
                    </p>
                    <div className="contatos">
                        <h2>Contatos</h2>
                        <h4>Nome: {fornecedor.nome}</h4>
                        <h4>E-mail: {fornecedor.email}</h4><br></br>
                        <h4>Nome: {fornecedor.nome2}</h4>
                        <h4>E-mail: {fornecedor.email2}</h4>
                    </div>
                    <button onClick={() => deletarFornecedor(id)}>
                        Excluir
                    </button>
                    <Link to={`editarDados/${id}`}>
                        <button>Editar</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default FornecedorDetails