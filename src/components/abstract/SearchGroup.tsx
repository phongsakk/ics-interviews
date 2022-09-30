import React, { useState } from 'react'
import { Box, Divider, IconButton, InputAdornment, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Search } from '@mui/icons-material'

import { categories } from '../../utils/const'
import SearchInput from '../styled/SearchInput'

interface IProps {
  data: {
    category: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  }
}

const SearchGroup = ({ data }: IProps) => {
  const {
    category, setCategory,
    searchQuery, setSearchQuery
  } = data

  const [componentCategory, setComponentCategory] = useState(category)
  const [componentSearchQuery, setComponentSearchQuery] = useState(searchQuery)

  const handleSelectCategory = (event: SelectChangeEvent<string>) => {
    setComponentCategory(event.target.value)
    setCategory(event.target.value)
  }

  const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComponentSearchQuery(event.target.value)
  }

  const returnData = () => {
    setCategory(componentCategory)
    setSearchQuery(componentSearchQuery)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault()
    returnData()
  }

  const handleBlurSearchQuery = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault()
    returnData()
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
        value={componentCategory}
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
        value={componentSearchQuery}
        onChange={handleChangeSearchQuery}
        onBlur={handleBlurSearchQuery}
        sx={{ width: { xs: '100%', md: '400px' }, paddingRight: 0 }}
      />
    </Box>
  )
}

export default SearchGroup
