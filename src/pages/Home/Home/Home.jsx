import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import PopularMenu from "../PopularMenu/PopularMenu"


const Home = () => {
  return (
    <div>
      <Banner/>

      <div className="mt-20">
          <Category/>
      </div>

      <div className="mt-20">
        <PopularMenu/>
      </div>
    </div>
  )
}

export default Home