import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt="image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
