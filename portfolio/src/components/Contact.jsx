import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const [showArrow, setShowArrow] = useState(false)

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    try {
      await axios.post("https://getform.io/f/bkkkpplb", userInfo)
      toast.success("Your message has been sent")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  // Handle scroll visibility for the arrow
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 relative mt-10">
      <h1 className="text-4xl font-bold mb-5 text-blue-200" style={{ fontFamily: 'Iceberg, sans-serif' }}>Contact me</h1>
      <h3 className="flex justify-center items-center h-full font-extrabold">Get In Touch</h3>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h5 className="text-xl font-semibold mb-4 text-black">Send Your Message</h5>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && (
              <span className="text-red-600 text-sm mt-1 block">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-600 text-sm mt-1 block">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter your query"
            />
            {errors.message && (
              <span className="text-red-600 text-sm mt-1 block">
                This field is required
              </span>
            )}
          </div>
          <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
        </form>
      </div>

      {/* Upward arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default Contact
