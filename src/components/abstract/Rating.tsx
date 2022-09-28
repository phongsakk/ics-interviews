import { Circle } from '@mui/icons-material'
import { Box, BoxProps, styled, Typography } from '@mui/material'
import React from 'react'

import { colors, text } from '../../utils/theme'

interface IProps {
  value: number
}

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  color: colors.default,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    justifyContent: 'center',
    top: '-55px',
    right: 0,
    backgroundColor: colors.default,
    width: '61px',
    height: '37px',
    borderRadius: '30px',
    color: text.white,

    '.MuiSvgIcon-root': {
      display: 'none',
    }
  }
}))

const Rating = ({ value }: IProps) => {
  return (
    <Wrapper>
      <Circle sx={{ fontSize: '.75rem', mr: '.5rem' }} />
      <Typography>{value}</Typography>
    </Wrapper>
  )
}

export default Rating