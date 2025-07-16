import Footer from '../SharedComponents/Footer'
import EveningNavbar from './EveningNavbar'
import EveningAzkarList from './EveningAzkarList'

function Allevening() {
  return (
    <div>
    <EveningNavbar/>
     <div style={{ paddingTop: "72px" }}>
        <EveningAzkarList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Allevening
