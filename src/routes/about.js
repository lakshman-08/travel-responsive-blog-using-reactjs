import Navbar from "../components/NavBar";
import Homebg from "../components/home-bg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
function about() {
  return (
    <>
      <Navbar />
      <Homebg
        cName="about-bg"
        bgimage="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="About"
        url="/"
      />
      <Aboutus />
      <Footer />
    </>
  );
}
export default about;
