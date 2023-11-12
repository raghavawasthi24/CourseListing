import React, { useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import AllCourses from './components/AllCourses'
import EnrolledCourses from './Dashboard'
import axios from 'axios'

export default function Home() {

  return (
    <div>
      <Header/>
      <Search/>
      <AllCourses/>
    </div>
  )
}
