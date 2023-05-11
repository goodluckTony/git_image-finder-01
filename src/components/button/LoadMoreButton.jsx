import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loadMoreButton: {
    alignSelf: 'flex-start',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '20px',
    padding: '10px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
  },
});

const LoadMoreButton = ({ handleLoadMore }) => {
  const handleClick = (e) => {
    console.log('hui');
    e.preventDefault();
    handleLoadMore();
  }

  const classes = useStyles();

  return (
    <div>
      <button type='submit' className={classes.loadMoreButton} onClick={(e) => handleClick(e)}>Load More</button>
    </div>
  )
}

export default LoadMoreButton;