import Style from './PagesMenu.module.css'
import { NavLink } from 'react-router-dom'

const PagesMenu = () => {
  return (
    <div className={Style.pageMenuWrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">services</NavLink>
      <NavLink to="/prices">prices</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  )
}

export default PagesMenu
