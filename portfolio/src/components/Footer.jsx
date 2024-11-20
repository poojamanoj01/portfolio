import React from 'react'

const Footer = () => {
  return (
    <>
      <hr className="h-0.5 bg-gray-700 border-none" />
      <footer className='py-8'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='mt-8 border-gray-700 pt-8 flex flex-col items-center'>
            <p className='font-bold text-xl'>Handcrafted with ❤️ by myself.</p>
            <p className='font-bold text-xl'>Copyright &copy; Pooja P M | 2024</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer



// import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { FaGithubSquare } from "react-icons/fa";
// const Footer = () => {
//   return (
// <>
// <hr />
//         <footer className='py-12'>
//     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
// <div className='flex flex-col items-center justify-center my-6'>
//     <div className='flex space-x-4'>
//         < FaLinkedin size={25}/>
//         <IoIosMail size={25}/>
//         <FaGithubSquare size={25}/>
//     </div>
//     <div className='mt-8 border-gray-700 pt-8 flex flex-col items-center'>
//         <p className='font-bold text-xl'>Handcrafted with ❤️ by myself.</p>
//         <p className='font-bold text-xl'>copyright &copy; Pooja P M |2024</p>

//     </div>
// </div>
//     </div>
//         </footer>
// </>
//   )
// }

// export default Footer