import { Box, CardContent, CardHeader, Typography } from '@mui/material'

import DetailCardWrapper from '../styled/DetailCardWrapper'

interface IProps {
  showInmobileView: boolean
  images: string[]
}

const ImageCard = ({ showInmobileView, images }: IProps) => {
  return (
    <Box
      sx={{
        display: { xs: showInmobileView ? 'block' : 'none', md: 'block' }
      }}
    >
      <DetailCardWrapper>
        <CardHeader
          title={
            <Typography component='h5'>Images</Typography>
          }
        />
        <CardContent>
          <Box display='flex' flexDirection='column' sx={{ borderRadius: '10px', overflow: 'hidden' }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`number${index}`}
                style={{ width: '100%', height: '210px', objectFit: 'cover' }}
              />
            ))}
          </Box>
        </CardContent>
      </DetailCardWrapper>
    </Box >
  )
}

export default ImageCard