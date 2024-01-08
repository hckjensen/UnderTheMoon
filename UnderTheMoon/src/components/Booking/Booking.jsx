import styles from './Booking.module.scss';
import Bookingcard from './Bookingcard/Bookingcard';
import bookingImage1 from '../../assets/images/booking1.jpg';
import bookingImage2 from '../../assets/images/booking2.jpg';


const Booking = () => {

    return (
        <div className={styles.bookingWrapper}>
            <Bookingcard 
                title="One 2 One"
                description='Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.'
                buttonText="Book tid"
                backgroundImage={bookingImage1}
            />
            <Bookingcard 
                title="Loyalty Free"
                description='Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.'
                buttonText="Læs mere"
                backgroundImage={bookingImage2}
            />
        </div>
    );


};

export default Booking;