import * as React from 'react';
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";

const LoadingProgress = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <CircularProgress color="success" />
    </Box>
  )
}

export default LoadingProgress;