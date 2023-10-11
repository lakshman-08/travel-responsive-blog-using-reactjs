import Navbar from "../components/NavBar";
import Homebg from "../components/home-bg";
import Footer from "../components/Footer";
import ContactForm from "../components/ConatctForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Homebg
        cName="about-bg"
        bgimage="https://images.unsplash.com/photo-1519885277449-12eee5564d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        title="Contact"
        url="/"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
