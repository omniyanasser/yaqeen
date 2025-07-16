
import Footer from '../SharedComponents/Footer'
import MorningAzkarList from './MorningAzkarList'
import MorningNavbar from './MorningNavbar'

function AllMorning() {
  return (
    <div>
      <MorningNavbar/>
      
      <div style={{ paddingTop: "72px" }}>
        <MorningAzkarList />
      </div>
      <Footer/>
    </div>
  )
}

export default AllMorning
