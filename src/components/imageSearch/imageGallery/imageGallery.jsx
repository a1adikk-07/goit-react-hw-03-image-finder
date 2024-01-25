import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ item, showModal }) => {
  const elements = item.map(({ id, webformatURL, tags }) => (
    <ImageGalleryItem
      key={id}
      showModal={showModal}
      id={id}
      webformatURL={webformatURL}
      tags={tags}
    />
  ));
  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;
