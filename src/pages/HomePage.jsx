import Style from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={Style.homePageWrapper}>
      <div>
        <h2>Tittle dlia foto</h2>
      </div>
      <div className={Style.bannerHomePage}></div>
      <div className={Style.postInfo}>
        <h2>Banner z Informacja</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          architecto quod deleniti dicta aspernatur dolor fugiat, odio, quis
          tempora laborum quidem ipsum quo officiis voluptatibus officia
          repellendus corporis! Reiciendis exercitationem sequi pariatur eos
          ullam quas.
        </p>
      </div>
    </div>
  )
}

export default HomePage
