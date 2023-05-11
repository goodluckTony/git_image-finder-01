import React from 'react';
import { useEffect } from "react"; 
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  modalContent: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
  modalImage: {

  },
});

const Modal = ({ selectedImage, handleClose }) => {
  const classes = useStyles();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div className={classes.modalOverlay} onClick={handleClose}>
      <div className={classes.modalContent}>
        <img className={classes.modalImage} src={selectedImage} alt="" />
      </div>
    </div>
  )
}

export default Modal