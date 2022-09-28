import { Box } from '@mui/material'
import React from 'react'

interface IProps {
  showInmobileView: boolean
}

const ImageCard = ({ showInmobileView }: IProps) => {
  return (
    <Box
      sx={{
        display: { xs: showInmobileView ? 'block' : 'none', md: 'block' }
      }}
    >
      ImageCard
    </Box >
  )
}

export default ImageCard