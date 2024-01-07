import styles from './Booking.module.scss';


const Booking = () => {

    return (
        <div className={styles.bookingWrapper}>
            <div className={styles.bookingSection}>
                <h2>One 2 One</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.</p>
                <button>Book tid</button>
            </div>
            <div className={styles.bookingSection}>
                <h2>Loyalty Free</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.</p>
                <button>læs mere</button>
            </div>
        </div>
    );


};

export default Booking;