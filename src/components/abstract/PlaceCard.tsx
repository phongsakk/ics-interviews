import { CalendarMonth } from '@mui/icons-material'
import { Box, CardActionArea, CardContent, CardHeader, Tooltip, Typography }
  from '@mui/material'
import { useNavigate } from 'react-router-dom'
import type { ZodPlaceJson } from '../../types'

import StyledCard from '../styled/StyledCard'
import FoodImageSlider from './FoodImageSlider'
import FoodImgStack from '../styled/FoodImgStack'
import PictureBox from './PictureBox'
import PlaceAvatar from './PlaceAvatar'
import Rating from './Rating'

interface IProps {
  place: ZodPlaceJson
}

const PlaceCard = ({ place }: IProps) => {
  const navigate = useNavigate()

  const operat = place.operation_time

  const operateCount = operat.map((value, _index, array) => {
    return {
      open: array.reduce((prev, curr) => (value.time_open === curr.time_open) ? prev++ : prev, 0),
      close: array.reduce((prev, curr) => (value.time_close === curr.time_close) ? prev++ : prev, 0)
    }
  })

  const operationTimeIndex = {
    open: operateCount.map(c => c.open).reduce((prev, curr) => curr > prev ? curr : prev, 0),
    close: operateCount.map(c => c.close).reduce((prev, curr) => curr > prev ? curr : prev, 0),
  }

  return (
    <StyledCard>
      <CardActionArea onClick={() => navigate(`/place/${place.id}`)}>
        <CardHeader
          avatar={
            <PlaceAvatar src={place.profile_image_url} />
          }
          title={
            <Tooltip title={place.name} disableInteractive>
              <Box width={292} overflow='hidden' textOverflow='ellipse'>
                <Typography component='h6' fontWeight='500' noWrap>{place.name}</Typography>
              </Box>
            </Tooltip>
          }
          subheader={
            <Box display='flex' alignItems='center'>
              <Box display='flex' alignItems='center' sx={{ color: '#000000' }}>
                <CalendarMonth sx={{ mr: '.5rem' }} />
                <Typography variant='caption'>
                  {place.operation_time[operationTimeIndex.open].time_open} AM - {place.operation_time[operationTimeIndex.close].time_close} PM
                </Typography>
              </Box>

              <Rating value={place.rating} />
            </Box>
          }
        />

        <CardContent>
          <FoodImgStack display={{ xs: 'none', md: 'flex' }}>
            {place.images.map((img, idx) => (
              <PictureBox src={img} key={idx}></PictureBox>
            ))}
          </FoodImgStack>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <FoodImageSlider images={place.images} src={`/place/${place.id}`} />
      </CardContent>
    </StyledCard>
  )
}

export default PlaceCard
