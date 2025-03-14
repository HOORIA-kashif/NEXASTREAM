 import React from "react";
 import { MdHomeFilled } from "react-icons/md";
 import { PiTelevisionSimpleBold } from "react-icons/pi";
 import { BiSolidMoviePlay } from "react-icons/bi";
 import { IoIosSearch } from "react-icons/io"
 
 
 export const navItems = [
  {
    label: 'Tv Shows',
    href: 'tv',
    icon:  <PiTelevisionSimpleBold/>
  },
  {
    label: 'Movies',
    href: 'movies',
    icon: <BiSolidMoviePlay />
  }
]

export const MobileNavigation = [
  {
    label:'Home',
    href: '/',
    icon: <MdHomeFilled />
  },
  ...navItems,
  {
    label:'Search',
    href: '/search',
    icon: <IoIosSearch />
  },
]