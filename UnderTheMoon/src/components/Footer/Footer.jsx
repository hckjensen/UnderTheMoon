
import styles from './Footer.module.scss';


const Footer = () => {
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
                    <h3>Quick Links</h3>
                    <p>Hjem</p>
                    <p>Om os</p>
                    <p>Prisliste</p>
                    <p>Booking</p>
                    <p>Newsletter</p>
                    <p>Kontakt</p>
                    
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
                        <p>+ 45 23 43 43 43</p>
                    </div>
                    <div>
                        <p>Telefonnummer</p>
                        <p>+ 45 58 84 84 84</p>
                    </div>
                    <div>
                        <p>Adresse</p>
                        <p>Supergatan 56,</p>
                        <p>Oslo, Norway</p>
                    </div>
                </section>
            </section>
        </footer>
    );
};

export default Footer; 