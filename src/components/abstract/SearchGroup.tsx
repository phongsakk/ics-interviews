import React from 'react'
import { Box, Divider, IconButton, InputAdornment, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Search } from '@mui/icons-material'

import { categories } from '../../utils/const'
import SearchInput from './SearchInput'

const SearchGroup = () => {
  const [category, setCategory] = React.useState('restuarant')
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSelectCategory = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value)
  }

  const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault()
    const postData = {
      category,
      searchQuery
    }

    console.log(postData)
  }

  return (
    <Box
      component='form'
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent='space-around'
      width={{ xs: '100%', md: 'auto' }}
      gap={1.5}
      onSubmit={handleSubmit}
    >
      <Select
        placeholder='Restaurant'
        input={<SearchInput />}
        value={category}
        onChange={handleSelectCategory}
        sx={{
          width: { xs: '100%', md: '180px' },
          '& .MuiMenuItem-root': {
            textTransform: 'capitalize',
          }
        }}
      >
        {categories.map((item, idx) => (
          <MenuItem
            value={item.toLowerCase()}
            selected={idx === 0}
            key={idx}
          >
            {item}
          </MenuItem>
        )
        )}
      </Select>

      <Divider
        orientation='vertical'
        sx={{ display: { xs: 'none', md: 'block' } }}
      />

      <SearchInput
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              type='submit'
              disableRipple
              disableTouchRipple
              sx={{ paddingX: 0 }}
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
        placeholder='Search name...'
        value={searchQuery}
        onChange={handleChangeSearchQuery}
        sx={{ width: { xs: '100%', md: '400px' }, paddingRight: 0 }}
      />
    </Box>
  )
}

export default SearchGroup
