import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import { PlaceInfo } from '../../types'

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
      <Card
        sx={{
          '.MuiCardMedia-root': {
            height: 200
          }
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={place.profile_image_url}
          alt={place.name}
        >
        </CardMedia>

        <CardHeader
          title={
            <Grid container>
              <Grid item xs>
                <Typography component='h6'>{place.name}
                </Typography>
              </Grid>
              <Grid item xs={'auto'}>
                rating
              </Grid>
            </Grid>
          }
        >

        </CardHeader>

        <CardContent>
          <Box>
            <Typography fontWeight='700' gutterBottom>
              Address:
            </Typography>
            <Typography>
              {place.address}
            </Typography>
          </Box>
        </CardContent>

        <CardContent>
          <Box>
            <Typography fontWeight='700' gutterBottom>
              Opening Hour:
            </Typography>
            <Typography>
              {place.operation_time.map((time, index) => (
                <p key={index}>{`${time.day}: ${time.time_open} - ${time.time_close}`}</p>
              )
              )}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box >
  )
}

export default InformationCard