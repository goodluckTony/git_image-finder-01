import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from "../modal/Modal"
import { createUseStyles } from "react-jss";
import {useState} from 'react';

const useStyles = createUseStyles({
  imagesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    // gridTemplateRows: 'repeat(3, 1fr)',
    listStyleType: 'none',
    gridGap: '20px',
    justifyItems: 'center',
    padding: '0 0',
  },
});

const ImageGallery = ( {images} ) => {
  const classes = useStyles();

  const [ selectedImage, setSelectedImage ] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image.largeImageURL);
  };
  const handleClose = () => {
    setSelectedImage(null);
  };


  return (
    <>
      <ul className={classes.imagesContainer}>
        {images.map((image) => (
          <ImageGalleryItem 
            key={image.id}
            image={image}
            handleClick={handleClick}
          />
        ))}
      </ul>
      {selectedImage && <Modal selectedImage={selectedImage} handleClose={handleClose} />}
    </>
  );
};

export default ImageGallery;
