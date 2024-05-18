import Banner from "../Banner/Banner"
import Category from "../Category/Category"


const Home = () => {
  return (
    <div>
      <Banner/>

      <div className="my-24">
          <Category/>
      </div>
    </div>
  )
}

export default Home