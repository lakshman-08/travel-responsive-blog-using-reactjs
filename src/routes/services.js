import Navbar from "../components/NavBar";
import Homebg from "../components/home-bg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function services() {
  return (
    <>
      <Navbar />
      <Homebg
        cName="about-bg"
        bgimage="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
        title="Services"
        url="/"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default services;
