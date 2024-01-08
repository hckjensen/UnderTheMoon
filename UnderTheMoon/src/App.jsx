import './App.scss'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Midsection from './components/Midsection/Midsection'


function App() {
  
  
  const footerLinks = ["Hjem", "About Us", "Pricelist", "Booking", "Newsletter", "Contact"]

  return (
    <>
      <Header heading="Under The Moon"/>
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
  )
}

export default App
