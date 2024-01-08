import './App.scss'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Midsection from './components/Midsection/Midsection'


function App() {
  
  
  const footerLinks = ["Hjem", "Om os", "Prisliste", "Booking", "Newsletter", "Kontakt"]

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
        links={footerLinks} 
        />
    </>
  )
}

export default App
