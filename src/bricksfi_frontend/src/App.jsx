import HeroMid from "../component/HeroMid";
import HeroTop from "../component/HeroTop";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Works from "../component/Works";
import MidBottom from "../component/MidBottom";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroTop />
      <HeroMid />
      <Works/>
      <MidBottom/>
      <Footer />
    </div>
  );
}
