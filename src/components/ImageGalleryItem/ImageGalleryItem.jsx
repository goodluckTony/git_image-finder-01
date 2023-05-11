import React from 'react'
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '250px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const ImageGalleryItem = ({ image, handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.gridItem}>
      <div className={classes.imageWrapper} onClick={() => handleClick(image)}>
        <img className={classes.imageStyle} src={image.webformatURL} alt="random" />
      </div>
    </div>
  )
}

export default ImageGalleryItem;