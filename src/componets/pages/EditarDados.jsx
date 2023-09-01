import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosFetch from "../../axios/axiosConfig"

const EditarDados = () => {

    const [razao, setRazao] = useState('')
    const [end, setEnd] = useState()
    const [produto, setProduto] = useState()
    const [nome, SetNome] = useState()
    const [email, setEmail] = useState()
    const [nome2, setNome2] = useState()
    const [email2, setEmail2] = useState()

    // setRazao('')
    // setEnd('')
    // setProduto('')
    // SetNome('')
    // setEmail('')
    // setNome2('')
    // setEmail2('')
    // }

    //     await axiosFetch.post('/addfornecedor', {
    //         razao: razao,
    //         end: end,
    //         produto: produto,
    //         nome: nome,
    //         email: email,
    //         nome2: nome2,
    //         email2: email2
    //     })
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    //     setRazao('')
    //     setEnd('')
    //     setProduto('')
    //     SetNome('')
    //     setEmail('')
    //     setNome2('')
    //     setEmail2('')
    // }

    // const editarFornecedor = async (id) => {
    //     await axiosFetch.put(`editarfornecedor/:id`, {
    //         id: id
    //     })
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        axiosFetch.put(`editarfornecedor/${id}`, {
            id: id,
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
                alert('Dados atualizados')
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
                <h2>Editar Dados do Fornecedor</h2>
                <div>

                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder='Razão social'
                        value={fornecedor.razao}
                        onChange={(e) => setRazao(e.target.value)}
                        required
                    /><br></br>
                    <input
                        type="text"
                        placeholder="Endereço completo"
                        value={fornecedor.end}
                        onChange={(e) => setEnd(e.target.value)}
                        required

                    /><br></br>
                    <input
                        type="text"
                        placeholder="Produto"
                        value={fornecedor.produto}
                        onChange={(e) => setProduto(e.target.value)}
                        required

                    /><br></br>
                    <div className="contatosForm">
                        <input
                            type="text"
                            placeholder="Nome de um responsável"
                            value={fornecedor.nome}
                            onChange={(e) => SetNome(e.target.value)}
                            required

                        />
                        <input
                            type="e-mail"
                            placeholder="E-mail"
                            value={fornecedor.email}
                            onChange={(e) => setEmail(e.target.value)}
                            required

                        /> <br></br>
                        <input
                            type="text"
                            placeholder="Nome de outro responsável (Opcional)"
                            value={fornecedor.nome2}
                            onChange={(e) => setNome2(e.target.value)}

                        />
                        <input
                            type="e-mail"
                            placeholder="E-mail (Opicional)"
                            value={fornecedor.email2}
                            onChange={(e) => setEmail2(e.target.value)}

                        />
                    </div>
                    <button type="submit">Editar</button>
                </form>

            </div>

        </div>
    )
}

export default EditarDados