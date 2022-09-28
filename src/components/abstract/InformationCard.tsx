import { Circle } from '@mui/icons-material'
import { Box, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'

import { PlaceInfo } from '../../types'
import { colors } from '../../utils/theme'
import DetailCardWrapper from '../styled/DetailCardWrapper'

interface IProps {
  showInmobileView: boolean
  place: PlaceInfo
}

const InformationCard = ({ showInmobileView, place }: IProps) => {
  return (
    <Box
      sx={{
        display: { xs: showInmobileView ? 'block' : 'none', md: 'block' }
      }}
    >
      <DetailCardWrapper>
        <CardMedia
          component="img"
          height="140"
          image={place.profile_image_url}
          alt={place.name}
        />

        <CardHeader
          title={
            <Grid container>
              <Grid item xs>
                <Typography component='h5'>{place.name}</Typography>
              </Grid>
              <Grid item xs={'auto'}>
                <Grid container alignItems='center' justifyContent='center' color={colors.default}>
                  <Circle sx={{ fontSize: '1rem', color: 'inherit', mr: .5 }} />
                  <Typography component='h6'>{place.rating}</Typography>
                </Grid>
              </Grid>
            </Grid>
          }
        />

        <CardContent>
          <Box>
            <Typography fontWeight='700' gutterBottom>
              Address:
            </Typography>
            <Typography component='span'>
              {place.address}
            </Typography>
          </Box>
        </CardContent>

        <CardContent>
          <Box>
            <Typography fontWeight='700' gutterBottom>
              Opening Hour:
            </Typography>
            <Typography component='span'>
              {place.operation_time.map((time, index) => (
                <p key={index}>{`${time.day}: ${time.time_open} - ${time.time_close}`}</p>
              )
              )}
            </Typography>
          </Box>
        </CardContent>
      </DetailCardWrapper>
    </Box >
  )
}

export default InformationCard