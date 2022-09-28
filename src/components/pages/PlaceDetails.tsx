import { KeyboardArrowLeft } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import IcsButton from '../base/IcsButton'
import InformationCard from '../abstract/InformationCard'
import StyledSwitchTab from '../styled/StyledSwitchTab'
import ImageCard from '../abstract/ImageCard'

const PlaceDetails = () => {
  const [current, setCurrent] = React.useState<number>(0)
  const navigate = useNavigate()

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
        <Box>
          <InformationCard showInmobileView={Boolean(current === 0)} />
          <ImageCard showInmobileView={Boolean(current === 1)} />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default PlaceDetails
