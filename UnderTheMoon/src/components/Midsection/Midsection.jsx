import Booking from '../Booking/Booking';
import Midtext from '../Midtext/Midtext';
import styles from './Midsection.module.scss';


const Midsection = () => {

    const heading = "Under The Moon - New style";
    const infoText = "Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam ."

    return (
        <div className={styles.midsection}>
            <Midtext heading={heading} text={infoText} />
            <Booking/>
            
        </div>
    );

}   

export default Midsection;