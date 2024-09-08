import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaListAlt } from 'react-icons/fa'
import './NavBar.css' // Importa o arquivo de estilos

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">
        <FaHome size={24} />
        <span>Home</span>
      </Link>
      <Link to="/list" className="nav-link">
        <FaListAlt size={24} />
        <span>Lista</span>
      </Link>
      <Link to="/profile" className="nav-link">
        <FaUser size={24} />
        <span>Perfil</span>
      </Link>
      
    </nav>
  )
}