import { Grid } from '@mui/material'
import React from 'react'

import { text } from '../../utils/theme'
import StyledSlider from './StyledSlider'

interface IProps {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

const menus = ['information', 'image']

const StyledSwitchTab = ({current, setCurrent}:IProps) => {

  return (
    <StyledSlider current={current}>
      {menus.map((menu, idx) => (
        <Grid
          item 
          key={menu}
          sx={{ zIndex: 20, width: '50%'}}
          onClick={(e) => setCurrent(idx)}
        >
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{
              color: idx === current ? text.white : 'inherit',
              height: '36px',
              minWidth: '100%',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
          >
            {menu.toUpperCase()}
          </Grid>
        </Grid>
      ))}
    </StyledSlider>
  )
}

export default StyledSwitchTab