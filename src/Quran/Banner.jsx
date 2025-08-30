import React from 'react'
import "./Quran.css"

function Banner() {
  return (
    <div>

<div className="main-banner change-name mx-1"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/masjid-pogung-dalangan-DBsQFuIbXg4-unsplash.jpg)` }}>
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="header-text display-flex flex-column justify-content-center align-items-center">
                      <h6>اقرأ كتاب الله</h6>
                        <h2><em>ركن</em> القرآن الكريم</h2>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
      
    </div>
  )
}

export default Banner
