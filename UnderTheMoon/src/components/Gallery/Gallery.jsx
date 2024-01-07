import styles from './Gallery.module.scss';
import Booking1 from '../../assets/images/booking1.jpg';


const Gallery = () => {
    const images = [
        // Add your image URLs here
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
        Booking1,
    ];

    return (
        <div className={styles.gallery}>
            <h2>follow us on instagram</h2>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Gallery; 