import PropTypes from 'prop-types';
import styles from './Bookingcard.module.scss';


const Bookingcard = ({ title, description, buttonText, backgroundImage }) => {

    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
        // Add other styles as needed
    };

    return (
        <div className={styles.card} style={cardStyle}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{buttonText}</button>
        </div>
    );
};

Bookingcard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
};


export default Bookingcard;

