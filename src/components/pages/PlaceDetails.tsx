import { KeyboardArrowLeft } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import IcsButton from '../base/IcsButton'
import InformationCard from '../abstract/InformationCard'
import StyledSwitchTab from '../styled/StyledSwitchTab'
import ImageCard from '../abstract/ImageCard'
import { FetchById } from '../../utils/fetch'
import { PlaceInfo } from '../../types'

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
          <Box marginTop={'16px'}>
            <InformationCard {...{ place }} showInmobileView={Boolean(current === 0)} />
            <ImageCard {...{ place }} showInmobileView={Boolean(current === 1)} />
          </Box>
        )}
      </Box>
    </React.Fragment>
  )
}

export default PlaceDetails
