import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalCard from '../components/HorizontalCard'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const TrendingData = useSelector(state => state.movieoData.bannerData)
  const { data: nowPlayingData, loading: nowPlayingLoading } = useFetch('/movie/now_playing')
  const { data: topRatedData, loading: topRatedLoading } = useFetch('/movie/top_rated')
  const { data: popularTvShowData, loading: topTvShowLoading } = useFetch('/tv/popular')
  const { data: onTheAirData, loading: onTheAirLoading } = useFetch('/tv/on_the_air')

  return (
    <div>
      <BannerHome />
      <HorizontalCard data={TrendingData} heading={"Trending"} trending={true} />
      {!nowPlayingLoading &&
        <HorizontalCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />}
      {!topRatedLoading &&
        <HorizontalCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"} />}
      {!topTvShowLoading &&
        <HorizontalCard data={popularTvShowData} heading={"Popular Tv Shows"} media_type={"tv"} />}
      {!onTheAirLoading &&
        <HorizontalCard data={onTheAirData} heading={"On The Air"} media_type={"tv"} />}
    </div>
  )
}

export default Home