import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';

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
  return <ul>{elements}</ul>;
};

export default ImageGallery;
