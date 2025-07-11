import HeroMid from "../component/HeroMid";
import HeroTop from "../component/HeroTop";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroTop />
      <HeroMid />
      <Footer />
    </div>
  );
}
