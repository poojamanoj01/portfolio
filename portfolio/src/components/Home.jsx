import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}

      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 relative">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2">
            <span className="text-xl">My name is</span>
            <h1 className="text-5xl  font-bold" >POOJA P M</h1>

            <div className="flex space-x-1 text-2xl md:text-4xl">

              <h5>I am a</h5>
              {/* <span className="font-bold" style={{ color: '#2563eb' }}>Developer</span> */}
              <ReactTyped
              className="font-bold text-blue-400 text-2xl"
              style={{ fontFamily: 'Iceberg, sans-serif' }}
          strings={["Developer.","Programmer."]}
          typeSpeed={10}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            {/* <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis laboriosam harum autem velit, facere enim voluptatum
              quisquam mollitia a animi, sapiente nesciunt nisi, nemo tempore
              quia veritatis quae minima dolores.
            </p>
            <br /> */}
            {/* social media icons */}
            <div className="flex justify-between">
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/pooja_p_m__resume.pdf'; // Replace with the actual path to your resume file
                    link.download = 'pooja_p_m__resume.pdf'; // Desired filename for the downloaded file
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  
                  className=" px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                  Download Resume
                </button>
                <ul className="flex items-center space-x-5 pl-2 mt-3">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pooja-p-m-655293270/"
                      target="_blank"
                      rel="noopener noreferrer"
                       className="text-white hover:text-blue-500 focus:outline-none"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:pooja.manojkumarr@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 focus:outline-none"

                    >
                      <IoIosMail className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/poojamanoj01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 focus:outline-none"

                    >
                      <FaGithubSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/your-phone-number"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 focus:outline-none"

                    >
                      <FaSquareWhatsapp className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>

              </div>


            </div>
          </div>
          {/* <div className="md:w-1/2">Right</div> */}
        </div>
      </div>
    </div>
    
  );
};

export default Home;
