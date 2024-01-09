import Nav from '../Nav/Nav';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';



const SubHeader = ({ subHeading, subHeadingText}) => {

    

    return (
        <>
            <div className={styles.subHeader}> 
                <h3>{subHeading}</h3>
                <p>{subHeadingText}</p>
            </div>
        </>
    )
}

SubHeader.propTypes = {
    subHeading: PropTypes.string.isRequired,
    subHeadingText: PropTypes.string.isRequired

};



const Header = ({heading}) => {
    

    const subHeading = "hair stylist og frisør";
    const subHeadingText = "Lorem ipsum dolor sit amet consectetur. Laoreet in vestibulum id in. At aliquam sed nibh elementum. Gravida et tellus quam nibh diam blandit a odio semper. Eu congue eget dolor commodo pellentesque et ac orci. Accumsan rhoncus sed fermentum malesuada. Eu risus integer consequat egestas diam suspendisse consequat mattis.";

    return(
        <>
            <div className={styles.header}>
            <Nav items={[
                { name: 'Home', path: '/' },
                { name: 'Concepts', path: '/concepts' },
                { name: 'Loyalty', path: '/loyalty' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
                ]} />
                <h1>{heading}</h1>
                <div className={styles.textBox}>
                    <SubHeader subHeading={subHeading} subHeadingText={subHeadingText}/>

                </div>
            </div>
        
        
        </>
    )
}



Header.propTypes = {
    heading: PropTypes.string.isRequired

};

export default Header;
