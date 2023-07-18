import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            libero voluptate et enim corrupti. Perspiciatis excepturi iusto
            distinctio ducimus. Deserunt aut incidunt cumque debitis itaque
            placeat sit quibusdam omnis consequatur.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
