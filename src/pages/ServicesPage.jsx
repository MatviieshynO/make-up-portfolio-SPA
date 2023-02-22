import Card from '@mui/material/Card'

import Style from './ServicesPage.module.css'

const ServicesPage = () => {
  return (
    <div className={Style.servicesPageWrapper}>
      <div className={Style.lineServices}>
        <div />
        <span>USLUGI</span>
        <div />
      </div>
      <div className={Style.cardsServices}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default ServicesPage
