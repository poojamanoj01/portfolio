import React from 'react'

const About = () => {
  return (
 <>
      <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 relative mt-60">
   <h1 className="text-4xl font-bold mb-5 text-blue-200" style={{ fontFamily: 'Iceberg, sans-serif' }}>About</h1>
  
    <p className="mb-10">
    Hello there! 👋 I'm a driven Full-Stack Developer and self-learner with a knack for crafting dynamic web solutions. With experience building projects and mastering modern web technologies, I’m a fast learner ready to tackle challenges and create impactful digital experiences.
    </p>
  
    <h1 className="text-xl font-bold mb-5">Education & Training</h1>
    <div className="border-l-4 border-blue-500 pl-5 space-y-8">
      <div className="relative">
        <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
        <h2 className="text-xl font-semibold">May.2024 - present</h2>
        <p className="text-blue-100">
          <strong>Course :</strong> Mearn Stack <br />
          <strong>Institution:</strong> Luminar Technolab
        </p>
      </div>
  
      <div className="relative">
        <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
        <h2 className="text-xl font-semibold">2021-2024</h2>
        <p className="text-blue-100">
          <strong>Degree :</strong> BCA<br />
          {/* <strong>Platform:</strong> [Platform/Institution Name] */}
        </p>
      </div>
  
          <div className="relative">
        <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
        <h2 className="text-xl font-semibold">2019 - 2021</h2>
        <p className="text-blue-100">
          <strong>Higher Secondary</strong><br />
          {/* <strong>Platform:</strong> [Platform/Institution Name] */}
        </p>
      </div>
  
      <div className="relative">
        <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
        <h2 className="text-xl font-semibold">2018 - 2019</h2>
        <p className="text-blue-100">
          <strong>High School</strong> <br />
          {/* <strong>Institution:</strong> [Your Institution Name] */}
        </p>
      </div>
    </div>
  </div>
 </>

  )
}

export default About