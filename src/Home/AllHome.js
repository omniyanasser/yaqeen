
import ArabicNavbar from '../SharedComponents/ArabicNavbar'
import Homepage from './Homepage'
import Footer from '../SharedComponents/Footer'

function AllHome() {
  return (
    <div>
      <ArabicNavbar/>
      <div className='pt-4 mt-5'></div>
      <Homepage/>
      <Footer/>
    </div>
  )
}

export default AllHome
