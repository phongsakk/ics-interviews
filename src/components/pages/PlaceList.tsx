import { Box, Typography } from '@mui/material'
import PlaceCard from '../abstract/PlaceCard'

import SearchGroup from '../abstract/SearchGroup'

const PlaceList = () => {
  return (
    <Box>
      <Box
        component='header'
        display='flex'
        justifyContent='space-between'
        flexDirection={{ xs: 'column', md: 'row' }}
        paddingBottom={1}
        width='100%'
      >
        <Typography component='h4'>Place List</Typography>
        <SearchGroup />
      </Box>

      <Box display='flex' flexWrap='wrap' gap={3}>
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </Box>
    </Box>
  )
}

export default PlaceList
