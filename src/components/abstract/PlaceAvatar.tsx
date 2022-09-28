import { Box } from '@mui/material'
import React from 'react'

import { colors } from '../../utils/theme'

interface IProps {
  src: string
}

const PlaceAvatar = ({ src }: IProps) => (
  <React.Fragment>
    <Box
      sx={{
        width: { xs: '100%', md: '60px' },
        height: { xs: '87px', md: '60px' },
        borderRadius: {xs: '0px', md: '10px'},
        bgcolor: colors.grey,
        overflow: 'hidden',
        backgroundImage: `url('${src}')`,
        backgroundSize: 'cover'
      }}
    />
  </React.Fragment>
)

export default PlaceAvatar