import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import AllCourses from './components/AllCourses'

export default function Dashboard() {
  return (
    <div>
      <Header/>
      <Search/>
      <AllCourses/>
    </div>
  )
}
