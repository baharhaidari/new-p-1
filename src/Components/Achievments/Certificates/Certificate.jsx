import "./Certificate.css";
import Slider from "react-slick";
import C1 from "../../../assets/Screenshot (402).png";
import C2 from "../../../assets/Screenshot (420).png";
import C3 from "../../../assets/Screenshot (427).png";
import C4 from "../../../assets/Screenshot (428).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificate.css";

export default function Certificate() {
  const certificatesInfo = [
    {
      src: C1,
      title: "Intro to SQL",
    },

    {
      src: C2,
      title: "Intermediate SQL",
    },

    {
      src: C3,
      title: "Intro to ChatGPT",
    },

    {
      src: C4,
      title: "Prompt Engineering",
    },

    {
      src: C1,
      title: "Frontend Development",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="certificates">
      <h1>My Certificates_</h1>
      <div className="certificates__container">
        <Slider {...settings}>
          {certificatesInfo.map((certificate, index) => {
            return (
              <div className="Cimg__container" key={index}>
                <div className="certificate__img__container">
                  <img src={certificate.src} alt="" />
                  <h3>{certificate.title}</h3>
                  <span>Date: 2022, 2023</span>
                  <br />
                  <span>Code to Inspire</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
