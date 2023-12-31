import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './componets/pages/home'
import Navbar from './componets/Navbar'
import Fornecedores from './componets/pages/fornecedores'
import FornecedorDetails from './componets/pages/FornecedorDetails'
import Form from './componets/forms/Form'
import EditarDados from './componets/pages/EditarDados'
function App() {

  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/fornecedores' element={<Fornecedores />} />
          <Route path='/detalhes/:id' element={<FornecedorDetails />} />
          <Route path='/formulario' element={<Form />} />
          <Route path='/detalhes/:id/editarDados/:id' element={<EditarDados />} />
        </Routes>
      </div>
    </Router>

  )
}
export default App
