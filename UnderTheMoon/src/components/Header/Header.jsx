import Nav from '../Nav/Nav';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';



const Header = ({heading}) => {
    const navItems = ["Hjem", "Koncepter", "UTM Loyalty", "Om", "Kontakt"]

    return(
        <>
            <div className={styles.header}>
                <Nav items={navItems}/>
                <h1>{heading}</h1>
                <div className={styles.textBox}>
                    <div className={styles.container}>
                        <h3>hairstylist og frisør</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Laoreet in vestibulum id in. At aliquam sed nibh elementum. Gravida et tellus quam nibh diam blandit a odio semper. Eu congue eget dolor commodo pellentesque et ac orci. Accumsan rhoncus sed fermentum malesuada. Eu risus integer consequat egestas diam suspendisse consequat mattis.</p>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}


Header.propTypes = {
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    heading: PropTypes.string.isRequired

};

export default Header