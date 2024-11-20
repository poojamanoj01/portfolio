import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import project1 from '../assets/project_1.svg'
// import project2 from '../assets/project_2.svg'
// import project3 from '../assets/project_3.svg'
// import project4 from '../assets/project_4.svg'
// import project5 from '../assets/project_5.svg'

const Portfolio = () => {
    const cardItems = [
        {
            id: 1,
            // logo: project1,
            name: "Job Portal 💼🌐",
            content:"A dynamic web application that connects job seekers with employers. Job seekers can search and apply for jobs, track their application statuses, and manage their profiles. Recruiters can post job listings, review applications, and communicate with candidates. Built with React, TailwindCSS, MongoDB, and Context API, this project showcases my expertise in full-stack development, responsive UI design, state management, and database integration ",
            githubLink: 'https://github.com/poojamanoj01',
            demoLink: 'https://project1.demo.com'
        },
        {
            id: 2,
            // logo: project2,
            name: "eCart 🛒💳",
            content:" Developed an e-commerce application using React and Redux, featuring product listing, payment integration, and user management. The app allows users to browse through various products, add items to their wishlist and cart, and process payments seamlessly. Implemented a responsive design and efficient state management with Redux to enhance user experience and ensure smooth navigation throughout the application ",
            githubLink: 'https://github.com/poojamanoj01',
            demoLink: 'https://project1.demo.com'
        },

        {
            id: 3,
            // logo: project3,
            name: "Chat App 💬🗨️",
            content:"  Developed a real-time chat application with user authentication and profile management. Features include user login,account creation, friend list management, and the ability to search for new users. Users can send and receive messages,edit their profiles, and log out securely. Friends list is displayed in a sidebar, and the chat box includes a message input  area for seamless communication.",
            githubLink: 'https://github.com/poojamanoj01',
            demoLink: 'https://project1.demo.com'
        },
   
        {
            id: 4,
            // logo: project4,
            name: "Weather App 🌤️🌦️",
            content:" Built a dynamic weather application in React that connects to a weather API to retrieve and display real-time weather  information. Users can search for locations to obtain detailed data, including latitude, longitude, temperature, humidity, and wind speed. The application emphasizes a clean, responsive design, ensuring a seamless experience for users on both  desktop and mobile devices.",
            githubLink: 'https://github.com/poojamanoj01',
            demoLink: 'https://project1.demo.com'
        },
        {
            id: 5,
            // logo: project5,
            name: "Snake Game 🐍🎮",
            content:"Created a classic Snake game using HTML, CSS, and Vanilla JavaScript.The game features responsive controls,real-time gameplay, and a scrolling sysytem, showcasing interactive design and game devlopment skills. ",
            githubLink: 'https://github.com/poojamanoj01',
            demoLink: 'https://project1.demo.com'
        },
        {
            id: 6,
            // logo: project5,
            name: "BMI Calculator 📊",
            content:" Built a BMI Calculator using HTML, CSS, and JavaScript that allows users to enter their weight and height.It calculates the BMI and displyeds whether the user is underweight, normal weight, or overweight, featuring a simple responsive design for ease of use across devices. ",
            githubLink: 'https://github.com/poojamanoj01',
            demoLink: 'https://project1.demo.com'
        }

    ]

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 relative mt-40">
            <h1 className="text-4xl font-bold mb-5 text-blue-200" style={{ fontFamily: 'Iceberg, sans-serif' }}>Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2 ">
                {cardItems.map(({ id, logo, name,content, githubLink, demoLink }) => (
                    <div
                    key={id}
                    className={`relative md:w-[400px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer flex flex-col transition-all duration-300 hover:scale-105 ${
                      id === 1
                        ? "hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600"
                        : id === 2
                        ? "hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-600"
                        : id === 3
                        ? "hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-600"
                        : id === 4
                        ? "hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-300"
                        : id == 5
                        ? "hover:bg-gradient-to-r hover:from-red-300 hover:to-lime-200"
                        : id === 6
                        ? "hover:bg-gradient-to-r hover:from-violet-500 hover:to-emerald-200"
                        : id === 7
                    }`}
                    >
                        {/* Portfolio Item Name */}
                        <div className="font-bold text-xl mb-2 text-blue-200 ">{name}</div>

                        <p className=" text-sm flex-1 overflow-hidden text-justify px-4">
                        {content}
                            </p>

                        {/* Image Section */}
                        {/* <img src={logo} alt={name} className="w-full h-1/2 object-cover" /> */}

                        {/* Icons Section */}
                        <div className="absolute top-2 right-2 flex space-x-3 gap-3">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-xl text-gray-700 hover:text-blue-950 transition duration-300" />
                            </a>

                            <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className="text-xl text-gray-700 hover:text-green-950 transition duration-300" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default Portfolio