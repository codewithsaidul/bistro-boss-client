import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
      className="hero h-[700px]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content bg-black bg-opacity-30 py-10 px-16 sm:px-20 md:px-60 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            {description}
          </p>
          
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Cover;
