import { KeyboardArrowLeft } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import IcsButton from '../base/IcsButton'
import InformationCard from '../abstract/InformationCard'
import StyledSwitchTab from '../styled/StyledSwitchTab'
import ImageCard from '../abstract/ImageCard'
import { FetchById } from '../../utils/fetch'
import { PlaceInfo } from '../../types'
import { colors, theme } from '../../utils/theme'

const PlaceDetails = () => {
  const [place, setPlace] = React.useState<PlaceInfo>()
  const [current, setCurrent] = React.useState<number>(0)
  const navigate = useNavigate()
  const { id } = useParams()

  React.useEffect(() => {
    const initial = async () => {
      if (!id) return
      const response: PlaceInfo = await FetchById(parseInt(id))
      setPlace(response)
    }

    initial()
  }, [id])


  return (
    <React.Fragment>
      <Box
        component='header'
        paddingBottom={1}
        width='100%'
      >
        <IcsButton
          onClick={() => navigate(-1)}
        >
          <KeyboardArrowLeft sx={{ mr: .5 }} />
          BACK
        </IcsButton>
      </Box>

      <Box>
        <Box>
          <StyledSwitchTab {...{ current, setCurrent }} />
        </Box>
        {place && (
          <Grid
            marginTop={'16px'}
            sx={{
              [theme.breakpoints.up('md')]: {
                width: 'auto',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: colors.fadeBlue,
                flexDirection: 'row',
              }
            }}
          >
            <Grid item xs={12} md={7}>
              <InformationCard {...{ place }} showInmobileView={Boolean(current === 0)} />
            </Grid>
            <Grid item xs={12} md={5}>
              <ImageCard images={place.images} showInmobileView={Boolean(current === 1)} />
            </Grid>
          </Grid>
        )}
      </Box>
    </React.Fragment>
  )
}

export default PlaceDetails
