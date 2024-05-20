import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredIMG from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (

    <section>
      <div className="hero bg-fixed min-h-screen featured__item text-white">
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="max-w-screen-xl mx-auto px-5 2xl:px-0">

          <SectionTitle subHeading={"Check it out"} heading="FROM OUR MENU" />

          <div className="flex flex-col py-5 md:flex-row md:items-center gap-5">
            <figure>
              <img src={featuredIMG} alt="" />
            </figure>

            <div>
              <span className="text-2xl">March 20, 2023</span>
              <p className="text-2xl">WHERE CAN I GET SOME?</p>
              <p className="text-xl">
                March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error voluptate facere, deserunt
                dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                ad laudantium tempore consequatur consequuntur omnis ullam
                maxime tenetur.
              </p>

              <button className="text-xl mt-5 px-3 border-b-2 rounded-full">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
