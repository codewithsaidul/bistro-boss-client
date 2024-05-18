import { Parallax } from 'react-parallax';


const SectionCover = ( { img, title, description } ) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
      className="hero h-[500px]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content bg-black bg-opacity-30 py-10 px-10 md:px-40 lg:px-60 text-center text-neutral-content">
        <div className="md:max-w-lg w-2/3 mx-auto">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            {description}
          </p>
          
        </div>
      </div>
    </div>
    </Parallax>
  )
}

export default SectionCover