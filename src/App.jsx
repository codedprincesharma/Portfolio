import Hero from "./componet/hero/Hero";
import Services from "./componet/services/Services";
import Contact from "./componet/contact/contact";
import Skills from "./componet/skills/skills"


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
        <Skills/>
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
