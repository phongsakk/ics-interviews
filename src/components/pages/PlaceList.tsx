import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

import type { PlaceInfo } from '../../types'
import { Fetch } from '../../utils/fetch'
import PlaceCard from '../abstract/PlaceCard'
import SearchGroup from '../abstract/SearchGroup'
import StyledPagination from '../styled/StyledPagination'

const PlaceList = () => {
  const [places, setPlaces] = useState<PlaceInfo[]>()
  const [category, setCategory] = useState('restaurant')
  const [searchQuery, setSearchQuery] = useState('')
  const [totalPage, setTotalPage] = useState(1)
  const [page, setPage] = useState(1)

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await Fetch(category, searchQuery, page);

      console.log(data)

      if (data.data) setPlaces(data.data)
      if (data.pageCount) setTotalPage(data.pageCount)

    }

    fetchData()
  }, [category, searchQuery, page])

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

      {totalPage > 1 && (
        <Grid container justifyContent='center' alignItems='center'>
          <StyledPagination
            color='primary'
            variant='outlined'
            count={totalPage}
            page={page}
            onChange={handlePageChange}
          />
        </Grid>
      )}
    </Box>
  )
}

export default PlaceList
