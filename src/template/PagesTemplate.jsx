import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PagesMenu from '../components/PagesMenu'
import Style from './PagesTemplate.module.css'

const PagesTemplate = () => {
  return (
    <div className={Style.templateWrapper}>
      <Header />
      <PagesMenu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PagesTemplate
