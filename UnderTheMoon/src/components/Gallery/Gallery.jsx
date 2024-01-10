import styles from './Gallery.module.scss';
import Booking1 from '../../assets/images/booking1.jpg';
import { useState } from 'react';


const Gallery = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setIsModalOpen(true);
        setCurrentImage(image);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };


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
        <>
            <div className={styles.gallery}>
                <h2>follow us on instagram</h2>
                <div className={styles.grid}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            onClick={() => openModal(image)}
                        />
                    ))}

                </div>
            </div>
            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={closeModal}
                >
                    <img
                        src={currentImage}
                        alt="Modal"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                            cursor: 'pointer',
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default Gallery; 