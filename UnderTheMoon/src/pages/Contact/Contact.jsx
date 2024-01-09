import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const ContactPage = () => { 

    const footerLinks = ["Hjem", "About Us", "Pricelist", "Booking", "Newsletter", "Contact"]
    const heading = "UNDER CONSTRUCTION";
    return (
        <>
            <Header heading={heading} />
            <div> CONTACT PAGE UNDER CONSTRUCTION NO ETA</div>
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
    )
    
}
export default ContactPage