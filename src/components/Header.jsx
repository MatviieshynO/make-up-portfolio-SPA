import { NavLink } from 'react-router-dom'
import Style from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={Style.headerWrapper}>
      <Link to="/">
        <img src={require('../img/makeupLogo.jpg.jpg')} />
      </Link>
    </div>
  )
}

export default Header
