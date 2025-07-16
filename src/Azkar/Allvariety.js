import VarietyNavbar from "./VarietyNavbar"
import Footer from '../SharedComponents/Footer'
import VarietyAzkarList from "./VarietyAzkarList"

function Allvariety() {
  return (
    <div>
     <VarietyNavbar/>
      <div style={{ paddingTop: "72px" }}>
        <VarietyAzkarList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Allvariety
