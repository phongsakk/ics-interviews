import { Box, Typography } from '@mui/material'
import React from 'react'
import { ZodPlaceJson } from '../../types'
import { Fetch } from '../../utils/fetch'
import PlaceCard from '../abstract/PlaceCard'

import SearchGroup from '../abstract/SearchGroup'

const PlaceList = () => {
  const [places, setPlaces] = React.useState<ZodPlaceJson[]>()
  const [category, setCategory] = React.useState('restaurant')
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    const fetchData = async ({ option }: { option: 'all' }) => {
      const res = await Fetch(category, searchQuery);
      if (res.data) setPlaces(res.data);
    }

    fetchData({ option: 'all' })
  }, [category, searchQuery])
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
        <Typography component='h4' fontWeight={500}>Place List</Typography>
        <SearchGroup data={{ category, setCategory, searchQuery, setSearchQuery }} />
      </Box>

      <Box display='flex' flexWrap='wrap' gap={3} marginY={3}>
        {places?.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </Box>
    </Box>
  )
}

export default PlaceList
