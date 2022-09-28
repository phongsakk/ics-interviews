import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import ControlButton from './ControlButton'

interface IProps {
  images: string[]
  src: string
}


const FoodImageSlider = ({ images, src }: IProps) => {
  const [index, setIndex] = React.useState(0)

  const handlePrevImage = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIndex(i => (i - 1 < 0) ? images.length - 1 : (i - 1))
  }

  const handleNextImage = (event: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault()
    setIndex(i => (i + 1 < images.length ? (i + 1) : 0))
  }

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
        width: '100%',
        aspectRatio: '1.61/1',
        backgroundImage: `url('${images[index]}')`,
        backgroundSize: 'cover',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <ControlButton onClick={handlePrevImage}>
        <KeyboardArrowLeft />
      </ControlButton>

      <ControlButton onClick={handleNextImage}>
        <KeyboardArrowRight />
      </ControlButton>
    </Box>
  )
}

export default FoodImageSlider