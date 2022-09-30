import { CalendarMonth } from '@mui/icons-material'
import { Box, CardActionArea, CardContent, CardHeader, Tooltip, Typography }
  from '@mui/material'
import { useNavigate } from 'react-router-dom'
import type { PlaceInfo } from '../../types'

import StyledCard from '../styled/StyledCard'
import FoodImageSlider from './FoodImageSlider'
import FoodImgStack from '../styled/FoodImgStack'
import PictureBox from './PictureBox'
import PlaceAvatar from './PlaceAvatar'
import Rating from './Rating'

interface IProps {
  place: PlaceInfo
}

const PlaceCard = ({ place }: IProps) => {
  const navigate = useNavigate()

  const d = new Date()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayParse = daysOfWeek[d.getDay()]
  const presentDay = place.operation_time.find(item => item.day === dayParse)

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
                  {presentDay && `${presentDay.time_open} - ${presentDay.time_close}`}
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
