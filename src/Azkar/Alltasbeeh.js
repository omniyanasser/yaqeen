
import TasbeehNavbar from "./TasbeehNavbar"
import Footer from '../SharedComponents/Footer'
import TasbeehAzkarList from "./TasbeehAzkarList"

function Alltasbeeh() {
  return (
    <div>
      <TasbeehNavbar/>
     <div style={{ paddingTop: "72px" }}>
        <TasbeehAzkarList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Alltasbeeh
