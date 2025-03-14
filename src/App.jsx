import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData, setImageUrl } from './store/movieoSlice'
import './App.css'
import Preloader from './components/Preloader'


const App = () => {
  const dispatch = useDispatch()

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      console.log("Trending Data Response:", response.data)
      dispatch(setBannerData(response.data.results))
    } catch (error) {
      console.log("Error fetching trending data:", error)
    }
  }

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration")
      console.log("Configuration Response:", response.data)
      dispatch(setImageUrl(response.data.images.secure_base_url + "original"))
    } catch (error) {
      console.log("Error fetching configuration:", error)
    }
  }

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  }, [])

  return (
    <main className='pb-14 lg:pb-0'>
     <Preloader />
      <Header />
      <div className='min-h-[90vh]'>
        
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    
    </main>
  )
}

export default App