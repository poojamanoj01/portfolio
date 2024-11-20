import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiRedux, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
<>
        <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 relative mt-40">
          <h1 className="text-4xl font-bold mb-5 text-blue-200" style={{ fontFamily: "Iceberg, sans-serif" }}>Skills</h1>
    
          <div className="flex flex-wrap  gap-10 mt-10">
            {/* Icons */}
            <div className="skill-icon">
            <FaHtml5 className="text-orange-500 text-6xl animate-skill-move-slow" />        </div>
            <div className="skill-icon">
              <FaCss3Alt className="text-blue-500 text-6xl  animate-skill-move-slow" />
            </div>
            <div className="skill-icon">
              <FaJsSquare className="text-yellow-500 text-6xl animate-skill-move-slow" />
            </div>
            <div className="skill-icon">
              <FaNodeJs className="text-green-500 text-6xl animate-skill-move-slow" />
            </div>
            <div className="skill-icon">
              <SiExpress className="text-gray-500 text-6xl animate-skill-move-slow" />
            </div>
            <div className="skill-icon">
              <FaReact className="text-blue-400 text-6xl animate-skill-move-slow" />
            </div>
            <div className="skill-icon">
              <SiRedux className="text-purple-500 text-6xl animate-skill-move-slow" />
            </div>
            <div className="skill-icon">
              <SiMongodb className="text-green-600 text-6xl animate-skill-move-slow" />
            </div>
          </div>
        </div>
</>
  );
};

export default Skills;
