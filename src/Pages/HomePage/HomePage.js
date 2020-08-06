import React from "react";
import "./HomePage.css";
import ProjectList from "../../Components/ProjectList/ProjectList";
import Footer from "../../Components/Footer/Footer";
import Particles from "react-particles-js";
import Header from "../../Components/Header/Header";

function HomePage() {
  return (
    <section className="homepage">
      <Header />
      <ProjectList />
      <Footer />
      <Particles
        className="particles--js1"
        params={{
          fps_limit: 27,
          particles: {
            collisions: {
              enable: false,
            },
            number: {
              value: 200,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              opacity: 0.4,
            },
            move: {
              speed: 0.5,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 1,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            debug: true,
            enable: true,
            scale: 1.5,
            type: "inline",
            move: {
              radius: 20,
            },
            url: `https://cdn.matteobruni.it/images/particles/smalldeer.svg`,
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)",
                width: 0.7,
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
              },
            },
          },
        }}
      />
      <Particles
        className="particles--js2"
        params={{
          fps_limit: 27,
          number: {
            value: 1,
            density: {
              enable: false,
            },
          },
        }}
      />
    </section>
  );
}

export default HomePage;
