import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink
                className='link parent-item capitalize nav-link'
                to="home">Home</NavLink ><hr />
            <NavLink
                className='link parent-item capitalize nav-link'
                to="empresa">Lista Empresas</NavLink > <hr />
            <NavLink
                className='link parent-item capitalize nav-link'
                to="oferta">Lista Ofertas</NavLink ><hr />
            <NavLink
                className='link parent-item capitalize nav-link'
                to="candidato">Candidatos</NavLink >
        </nav>
    )
}

export default Navbar