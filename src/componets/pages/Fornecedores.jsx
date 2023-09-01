import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Card"
import axiosFetch from "../../axios/axiosConfig"
import "./Fornecedores.css"

const Fornecedores = () => {

    const [fornecedor, setFornecedor] = useState([])

    const getSups = async () => {
        try {
            const response = await axiosFetch.get('/listarfornecedores')

            const data = response.data
            setFornecedor(data.fornecedores)
            console.log(data.fornecedores)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getSups()
    }, [])

    return (
        <div className="container">
            <div>
                <div className="div2">
                    <h1>Fornecedores</h1>
                    <Link to={'/formulario'}>
                        <p>Adicionar fornecedor</p>
                    </Link>
                </div>
                <div className="cards">
                    {
                        fornecedor.map((fornecedor) => (
                            <Card
                                id={fornecedor.id}
                                key={fornecedor.id}
                                razao={fornecedor.razao}
                                produto={fornecedor.produto}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Fornecedores