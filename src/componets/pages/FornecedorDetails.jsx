import { useEffect, useState } from "react"
import axiosFetch from "../../axios/axiosConfig"
import { useParams } from "react-router-dom"
import './FornecedorDetails.css'


const FornecedorDetails = () => {

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
        <div className="container">
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

                </div>
            </div>
        </div>
    )
}

export default FornecedorDetails