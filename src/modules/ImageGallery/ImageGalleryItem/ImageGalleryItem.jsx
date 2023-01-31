import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt="image"
      />
    </li>
  );
};

export default ImageGalleryItem;
