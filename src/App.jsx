import Hero from "./componet/hero/Hero";
import Services from "./componet/services/services";
import Portfolio from "./componet/portfolio/portfolio";
import Contact from "./componet/contact/contact";


const App = () => {
  return (
    <div className="container">
      <section id="#home">
        <Hero />
      </section>
      <section id="#service">
        <Services />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
