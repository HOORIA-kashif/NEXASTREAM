import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

const BannerHome = () => {
  const bannerData = useSelector(state => state.movieoData.bannerData)
  const imageURL = useSelector(state => state.movieoData.imageUrl)
  const [currentImage, setCurrentImage] = useState(0)

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage(prev => prev - 1)
    } else {
      setCurrentImage(bannerData.length - 1)
    }
  }

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage(prev => prev + 1)
    } else {
      setCurrentImage(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentImage, bannerData.length])

  return (
    <section className='w-full min-h-[50vh] relative overflow-hidden group'>
      {/* Slider Container */}
      <div className='flex transition-transform duration-500 ease-in-out transition-all' 
        style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        
        {
          bannerData.map((data, index) => (
            <div key={data.id+"bannerHome"+index} className='min-w-full h-[450px] lg:h-[95vh] overflow-hidden relative'>
              <div className='w-full h-full'>
                <img
                  src={imageURL + data.backdrop_path}
                  className='w-full h-full object-cover object-center'
                  alt={data.title || data.name}
                />
              </div>
    
              {/* Gradient Overlay */}
              <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent'></div>
    
              {/* Content */}
              <div className='max-w-screen-xl mx-auto px-3 sm:px-8 lg:px-10 xl:px-20 absolute bottom-0 max-w-md w-full'>
                <h2 className='text-2xl font-bold lg:text-4xl text-white drop-shadow-2xl'>
                  {data?.title || data?.name}
                </h2>
                <p className='my-2 text-white whitespace-normal leading-relaxed
                text-justify lg:w-[60%]'>
                  {data.overview}
                </p>
    
                <div className='flex items-center gap-3 text-white '>
                  <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                  <span>|</span>
                  <p>View: {Number(data.popularity).toFixed(0)}</p>
                </div>
                <button className='mb-4 bg-white px-4 py-2 text-black font-bold rounded-sm mt-4 hover:bg-gradient-to-l from-red-700 to-orange-200 shadow-md transition-all hover:scale-105'>
                  Play Now
                </button>
              </div>
            </div>
          ))
        }
      </div>
    
      {/* Navigation Buttons */}
      <div className='absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-between px-4'>
        <button onClick={handlePrevious} className='bg-black/60 p-2 rounded-full text-white text-xl shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={currentImage === 0}>
          <FaAngleLeft />
        </button>
        <button onClick={handleNext} className='bg-black/60 p-2 rounded-full text-white text-xl shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={currentImage === bannerData.length - 1}>
          <FaAngleRight />
        </button>
      </div>
    </section>
  )
}

export default BannerHome
