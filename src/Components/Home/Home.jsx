import "./Home.css";
import image from "../../assets/work-1.jpg";

export default function Home() {
  return (
    <section class="home__section">
      <div className="info__container">
        <h3>Hi, it's me</h3>
        <h1>Bahar Haidari</h1>
        <h3>A Frontend Web Developer</h3>
        <p>
          With a passion for crafting stunning websites. I specialize in
          creating engaging user experiences through elegant design and seamless
          functionality. Welcome to my portfolio, where aesthetics meet
          functionality!
        </p>

        <div className="btns__container">
          <a href="#home">Download CV</a>
          <a href="#contact">Contact Me</a>
          {/* <div class="scroll-down">
            <i class="fas fa-angle-double-down"></i>
          </div> */}
        </div>
      </div>

      <div class="badge">
        <div class="text">"Bahar"</div>
      </div>
    </section>
  );
}
