import { useState } from "react"
import axiosFetch from "../../axios/axiosConfig"
import "./Form.css"
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate = useNavigate()

    const [razao, setRazao] = useState()
    const [end, setEnd] = useState()
    const [produto, setProduto] = useState()
    const [nome, SetNome] = useState()
    const [email, setEmail] = useState()
    const [nome2, setNome2] = useState()
    const [email2, setEmail2] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axiosFetch.post('/addfornecedor', {
            razao: razao,
            end: end,
            produto: produto,
            nome: nome,
            email: email,
            nome2: nome2,
            email2: email2
        })
            .then((response) => {
                console.log(response)
                alert('Novo fornecedor criado')
                navigate('/fornecedores')


            })
            .catch((err) => {
                console.log(err)
            })

        setRazao('')
        setEnd('')
        setProduto('')
        SetNome('')
        setEmail('')
        setNome2('')
        setEmail2('')
    }
    return (
        <div className="conteiner">
            <div className="form">
                <h2>Adicionar novo Fornecedor</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form1">
                    <label htmlFor="">Razão social da empresa: </label>
                        <input
                            type="text"
                            placeholder="Razão social"
                            value={razao || ''}
                            onChange={(e) => setRazao(e.target.value)}
                            required
                        /><br></br>
                        <label htmlFor="">Endereço completo: </label>
                        <input
                            type="text"
                            placeholder="Endereço completo"
                            value={end || ''}
                            onChange={(e) => setEnd(e.target.value)}
                            required

                        /><br></br>
                        <label htmlFor="">Produto fornecido: </label>
                        <input
                            type="text"
                            placeholder="Produto"
                            value={produto || ''}
                            onChange={(e) => setProduto(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div className="contatosForm">
                    <label htmlFor="">Nome do responsável: </label>
                        <input
                            type="text"
                            placeholder="Nome de um responsável"
                            value={nome || ''}
                            onChange={(e) => SetNome(e.target.value)}
                            required
                        />
                        {/* <label htmlFor="">Contato do responsável: </label> */}
                        <input
                            type="e-mail"
                            placeholder="E-mail"
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                            required

                        /> <br></br>
                        {/* <label htmlFor="">Nome de outro responsável (caso tenha): </label> */}
                        <input
                            type="text"
                            placeholder="Nome de outro responsável (Opcional)"
                            value={nome2 || ''}
                            onChange={(e) => setNome2(e.target.value)}

                        />
                        <input
                            type="e-mail"
                            placeholder="E-mail (Opicional)"
                            value={email2 || ''}
                            onChange={(e) => setEmail2(e.target.value)}

                        />
                    </div>
                    <button type="submit">Adicionar fornecedor</button>

                </form>

            </div>

        </div>
    )
}

export default Form