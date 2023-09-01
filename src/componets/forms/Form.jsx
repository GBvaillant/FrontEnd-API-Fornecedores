import { useState } from "react"
import axiosFetch from "../../axios/axiosConfig"
import "./Form.css"

const Form = () => {

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
                <div>

                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Razão social"
                        value={razao || ''}
                        onChange={(e) => setRazao(e.target.value)}
                    /><br></br>
                    <input
                        type="text"
                        placeholder="Endereço completo"
                        value={end || ''}
                        onChange={(e) => setEnd(e.target.value)}

                    /><br></br>
                    <input
                        type="text"
                        placeholder="Produto"
                        value={produto || ''}
                        onChange={(e) => setProduto(e.target.value)}

                    /><br></br>
                    <div className="contatosForm">
                        <input
                            type="text"
                            placeholder="Nome de um responsável"
                            value={nome || ''}
                            onChange={(e) => SetNome(e.target.value)}

                        />
                        <input
                            type="e-mail"
                            placeholder="E-mail"
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}

                        /> <br></br>
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
                    <button onClick={() => history.push('/fornecedores')} type="submit">Adicionar fornecedor</button>
                </form>

            </div>

        </div>
    )
}

export default Form