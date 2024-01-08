import PropTypes from 'prop-types';
import styles from './Footer.module.scss';


const Footer = ({ contactInfo, links }) => {
    return (
        <footer className={styles.footer}>
            <section className={styles.section1}>
                <h3>Subscribe to newsletter</h3>
                <form action="">
                    <input type="text" placeholder='Full name'/>
                    <input type="email" placeholder='Email' />
                </form>
                <button> Sign up</button>
            </section>
            <section className={styles.section2}>
                <section className={styles.links}>
                    <h3>{links.title}</h3>
                    {links.items.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                    
                    <div className={styles.followContainer}>
                        <h3>Follow us</h3>
                        <div className={styles.circles}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>
                    </div>
                    
                </section>
                <section className={styles.contact}>
                    <h3>Find Us</h3>
                    <div>
                        <p>WhatsApp</p>
                        <p>{contactInfo.whatsApp}</p>
                    </div>
                    <div>
                        <p>Telefonnummer</p>
                        <p>{contactInfo.telephoneNumber}</p>
                    </div>
                    <div>
                        <p>Adresse</p>
                        <p>{contactInfo.address.line1}</p>
                        <p>{contactInfo.address.line2}</p>
                    </div>
                </section>
            </section>
        </footer>
    );
};

Footer.propTypes = {
    contactInfo: PropTypes.shape({
      whatsApp: PropTypes.string.isRequired,
      telephoneNumber: PropTypes.string.isRequired,
      address: PropTypes.shape({
        line1: PropTypes.string.isRequired,
        line2: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    links: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };

export default Footer; 