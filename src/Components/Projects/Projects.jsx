import Slider from "react-slick";
import ProjectFilters from "./Filters/ProjectFilters";
import "./Projects.css";
import ProjectSearch from "./Search/ProjectSearch";
import C1 from "../../assets/img-4.jpg";
import C2 from "../../assets/img-1.webp";
import C3 from "../../assets/work-1.jpg";
import C4 from "../../assets/img-3.jfif";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

export default function Projects() {
  const certificatesInfo = [
    {
      src: C1,
      title: "Simon Game",
      desc: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },

    {
      src: C2,
      title: "Personal Portfolio",
      desc: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },

    {
      src: C3,
      title: "Todo App",
      desc: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },

    {
      src: C4,
      title: "Dice Game",
      desc: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },

    {
      src: C1,
      title: "Movie App",
      desc: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },

    {
      src: C2,
      title: "Online Shop",
      desc: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
    <section className="projects">
      <h1>My Projects_</h1>

      <div className="search__filter">
        <ProjectFilters />
        <ProjectSearch />
      </div>

      <Slider {...settings}>
        {certificatesInfo.map((certificate, index) => {
          return (
            <div key={index}>
              <ProjectDetails
                src={certificate.src}
                title={certificate.title}
                info={certificate.desc}
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
