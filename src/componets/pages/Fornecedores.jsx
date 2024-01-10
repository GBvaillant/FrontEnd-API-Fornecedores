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
                        <button>Adicionar</button>
                    </Link>
                </div>
                <div className="div3">
                <input type="text" placeholder="Pesquisar" />
                </div>
                <div className="titulos">
                    <div className="fornecedor">
                        <h3>Fornecedor</h3>
                    </div>
                    <div className="produto">
                        <h3>Produto</h3>
                    </div>
                    <div className="descricao">
                        <h3>Descrição</h3>
                    </div>

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