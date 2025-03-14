import React, { useEffect, useState } from 'react'
import logo from '../assets/logos.png'
import user from '../assets/user.png'
import { Link, NavLink, useNavigate , useLocation} from 'react-router-dom'
import { IoIosSearch } from "react-icons/io"
import { navItems } from './constant/Navigation'
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [SearchInput, setSearchInput] = useState('')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (SearchInput) {
      navigate(`search?q=${SearchInput}`)
    }
  }, [SearchInput])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setIsLoginOpen(false)
  }

  return (
    <>
      <header className='fixed top-0 w-full h-16 bg-black/50 z-40'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 flex items-center h-full'>
          {/* logo section */}
          <Link to={'/'} className='flex items-center '>
            <img src={logo} alt='' width={40} />
            <h4 className='text-red-600 uppercase font-bold'>examstream</h4>
          </Link>
          {/* navitems */}
          <nav className='hidden lg:flex items-center gap-1 ml-5'>
            {navItems.map((nav) => (
              <div key={nav.label}>
                <NavLink to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive ? 'text-neutral-100' : ''}`}>
                  {nav.label}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className='ml-auto flex items-center gap-5'>
            {/* searchbar */}
            <form className='flex items-center gap-2' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Search here...'
                className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                onChange={(e) => setSearchInput(e.target.value)}
                value={SearchInput}
              />
              <button className='text-2xl text-white'>
                <IoIosSearch />
              </button>
            </form>
            {/* user icon or sign up text */}
            {isAuthenticated ? (
              <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all' onClick={() => setIsLoginOpen(true)}>
                <img src={user} alt='' className='w-full h-full' />
              </div>
            ) : (
              <button onClick={() => setIsLoginOpen(true)} className='text-white
              text-2xl'><FaUserCircle /></button>
            )}
          </div>
        </div>
      </header>

      {/* Login  */}
      {isLoginOpen && (
        <div className='fixed inset-0 flex items-center justify-center  z-50' style={{ backgroundImage: "url('src/assets/1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='bg-black p-8 rounded-lg shadow-lg w-96 text-white relative'>
            <button className='absolute top-2 right-3 text-2xl' onClick={() => setIsLoginOpen(false)}>✖</button>
            <h2 className='text-3xl font-bold mb-6 text-center'>Sign In</h2>
            <form onSubmit={handleLogin}>
              <input
                type='email'
                placeholder='Email or phone number'
                className='w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none'
                required
              />
              <input
                type='password'
                placeholder='Password'
                className='w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none'
                required
              />
              <button type='submit' className='w-full bg-red-600 hover:bg-red-700 p-3 rounded font-bold text-lg'>
                Sign In
              </button>
            </form>
            <p className='text-sm text-gray-400 mt-4 text-center'>
              New to Examstream? <span className='text-white cursor-pointer'>Sign up now.</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
