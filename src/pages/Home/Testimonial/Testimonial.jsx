import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const review = await axios(`${import.meta.env.VITE_API_URL}/reviews`);
      setReviews(review.data);
    };

    getReviews();
  }, []);

  return (
    <section className="mt-20">
      <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS" />

      <Swiper
        navigation={true}
        
        modules={[Navigation]}
        className="mySwiper max-w-screen-xl mx-auto px-5 2xl:px-0"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-12 md:m-24 flex flex-col items-center text-center gap-3">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <span>
                <FaQuoteLeft size={100} />
              </span>
              <p className="text-xl text-[#444444]">{review.details}</p>
              <h3 className="text-3xl text-[#CD9003] font-medium">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
