import Style from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={Style.aboutPageWrapper}>
      <div className={Style.lineAbout}>
        <div />
        <span>O MNIE</span>
        <div />
      </div>
      <div className={Style.infoAbout}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          placeat sed minima natus vitae quasi!
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, eaque!
        </p>
      </div>
    </div>
  )
}

export default AboutPage
