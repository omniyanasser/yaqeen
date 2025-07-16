import React from 'react';
import "./Quran.css"
import Banner from './Banner';
import Search from './Search';
import ArabicNavbar from '../SharedComponents/ArabicNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../SharedComponents/Footer';



function AllQuranpage() {
  return (
    <div>
      <ArabicNavbar/>
      <Banner/>
      <Search/>
      <Footer/>
    
    </div>
  )
}

export default AllQuranpage
