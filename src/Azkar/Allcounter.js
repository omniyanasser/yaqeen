import Counter from "./Counter";
import CounterNavbar from "./CounterNavbar";
import Footer from '../SharedComponents/Footer'
function Allcounter() {
  return (
    <div>
      <CounterNavbar />
      
        <Counter />
     <Footer/>
    </div>
  );
}

export default Allcounter;
