  import Header from "../../components/Header/Header";
  import Midsection from "../../components/Midsection/Midsection";
  import Gallery from "../../components/Gallery/Gallery";
  import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";


  const HomePage = () => {

    useEffect(() => {
        document.title = 'Home | Under The Moon';
    }, []);


  const footerLinks = ["Hjem", "About Us", "Pricelist", "Booking", "Newsletter", "Contact"]
  const heading = "Under The Moon";

  return (
    <>
      <Header heading={heading}/>
      <Midsection />
      <Gallery />
      <Footer 
        contactInfo={{
          whatsApp: "+ 45 23 43 43 43",
          telephoneNumber: "+ 45 58 84 84 84",
          address: {
            line1: "Supergatan 56,",
            line2: "Oslo, Norway"
            }
        }}
        links={{
          title: "Quick Links",
          items: footerLinks
        }} 
        />
    </>
  )}
  export default HomePage;