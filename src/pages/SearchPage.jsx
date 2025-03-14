import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const SearchPage = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const navigate = useNavigate()
  const query = location?.search?.slice(3)

  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page
        }
      })
      setData((prev) => [...prev, ...response.data.results])
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    if (query) {
      setPage(1)
      setData([])
      fetchData()
    }
  }, [location?.search])

  useEffect(() => {
    if (query) {
      fetchData()
    }
  }, [page])

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='py-20 px-4 lg:px-6'>
      {/* Search Bar (Hidden on Large Screens) */}
      <div className='lg:hidden my-3 sticky top-[70px] z-30 '>
        <input 
          type='text'
          placeholder='Search here...'
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
          className='px-4 py-2 w-full bg-white rounded-md text-neutral-900 shadow-md
          outline-none'
        />
      </div>

      {/* Container for Search Results */}
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>

        {/* Improved Grid Layout */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 justify-center'>
          {data.map((searchData) => (
         <div className="w-full sm:w-[150px] md:w-[250px] lg:w-[400px] xl:w-[500px] !important">
         <Card 
           key={searchData.id + "search"} 
           data={searchData} 
           media_type={searchData.media_type} 
         />
       </div>
       
        
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
