/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Footer from '../Components/Footer'
import FetchPosts from '../Components/FetchPosts'
import Posts from '../Components/post'
function Home() {
  return (
    <div>
        {/* Header */}
         <Header/>
        {/* Search */}
        <Search/>
      {/* Intropost */}
      <IntroPost/>
      {/* footer */}
      <Footer/>
      {/* Fetch Posts */}
      <FetchPosts/>
      {/* Posts */}
      <Posts/>
    </div>
  )
}

export default Home
