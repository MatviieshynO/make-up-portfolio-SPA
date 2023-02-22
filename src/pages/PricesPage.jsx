import Style from './PricesPage.module.css'

const PricesPage = () => {
  return (
    <div className={Style.pricePageWrapper}>
      <div className={Style.linePrice}>
        <div />
        <span>CENNIK</span>
        <div />
      </div>
      <div className={Style.priceCards}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default PricesPage
