import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const ExplorePage = () => {
  const params = useParams()
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0)

  console.log("params", params.explore)

  const fetchData = async (page) => {
    try {
      const validTypes = ["movie", "tv"]
      const mediaType = validTypes.includes(params.explore) ? params.explore : "movie" // Default to "movie" if invalid

      const response = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}`, {
        params: {
          page: page,
          api_key: import.meta.env.VITE_TMDB_API_KEY // Store API key in .env
        }
      })

      setData((prev) => page === 1 ? response.data.results : [...prev, ...response.data.results])
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // Added offset for better UX
      setPageNo(prev => (prev < totalPageNo ? prev + 1 : prev))
    }
  }

  // Fetch data when `params.explore` changes (Reset page number and data)
  useEffect(() => {
    setData([]) // Clear previous data
    setPageNo(1) // Reset page number
  }, [params.explore])

  // Fetch data when `pageNo` changes
  useEffect(() => {
    fetchData(pageNo)
  }, [pageNo, params.explore])

  // Infinite Scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='py-16'>
      <div className='container mx-auto px-4'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} shows</h3>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 justify-center'>
          {data.map((exploreData) => (
            <Card data={exploreData} key={exploreData.id + "exploreSection"} media_type={params.explore} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
