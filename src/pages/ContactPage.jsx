import Style from './ContactPage.module.css'
import { Button } from '@mui/material'

const ContactPage = () => {
  return (
    <div className={Style.contactPageWrapper}>
      <div className={Style.lineContact}>
        <div />
        <span>KONTAKT</span>
        <div />
      </div>
    </div>
  )
}

export default ContactPage
