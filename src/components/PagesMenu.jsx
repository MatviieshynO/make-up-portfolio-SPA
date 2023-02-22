import Style from './PagesMenu.module.css'
import { NavLink } from 'react-router-dom'

const PagesMenu = () => {
  return (
    <nav>
      <NavLink to="/services">USŁUGI</NavLink>
      <NavLink to="/prices">CENNIK</NavLink>
      <NavLink to="/about">O MNIE</NavLink>
      <NavLink to="/contact">KONTAKT</NavLink>
    </nav>
  )
}

export default PagesMenu
