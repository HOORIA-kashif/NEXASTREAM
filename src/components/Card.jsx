import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector(state => state.movieoData.imageUrl)
  const mediaType = data.media_type ?? media_type

  return (
    <Link 
      to={"/" + mediaType + "/" + data.id} 
      className='w-full min-w-[150px] lg:min-w-[230px] max-w-[230px] h-72 overflow-hidden block rounded-lg relative hover:scale-105 transition-transform'
    >
      {data?.poster_path ? (
        <img
          src={imageURL + data?.poster_path}
          alt={data?.title || data?.name}
          className='w-full h-full object-cover rounded-lg'
        />
      ) : (
        <div className='bg-neutral-800 h-full w-full flex justify-center items-center text-white'>
          Movie Not Found
        </div>
      )}

      {trending && (
        <div className='absolute top-3 left-2 py-1 px-2 bg-black/70 text-white text-xs rounded-r-full'>
          #{index} Trending
        </div>
      )}

      <div className='absolute bottom-0 w-full bg-black/60 backdrop-blur-lg p-2 lg:p-3 rounded-b-lg'>
        <h2 className='text-ellipsis line-clamp-1 text-sm font-semibold text-white'>
          {data?.title || data?.name}
        </h2>
        <div className='text-xs text-neutral-400 flex justify-between items-center mt-1'>
        <p className='hidden lg:block'>{moment(data.release_date).format("MMMM Do YYYY")}</p>
<p className='lg:hidden'>{moment(data.release_date).format("D/M/YYYY")}</p>

          <p className='bg-black px-2 py-1 rounded-full text-xs text-white'>
            <span className=' lg:inline'>Rating: </span> {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
