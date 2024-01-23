const ImageGalleryItem = ({ showModal, id, webformatURL, tags }) => {
  return (
    <li key={id} onClick={() => showModal({ webformatURL, tags })}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
