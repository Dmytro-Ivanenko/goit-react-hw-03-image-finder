import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.scss';

const ImageGallery = ({ images, showImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            onClick={() => showImage(largeImageURL)}
            webformatURL={webformatURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
