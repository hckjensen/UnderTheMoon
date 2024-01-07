import styles from './Midtext.module.scss';
import PropTypes from 'prop-types';

const Midtext = ({ heading, text }) => {
    return (
        <div className={styles.midtext}>
            <div className={styles.container}>
                <h2>{heading}</h2>
                <p>{text}</p>
                <button>læs mere</button>
            </div>
            
        </div>
    );
};

Midtext.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Midtext;
