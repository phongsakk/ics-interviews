import { ListAltRounded } from '@mui/icons-material'
import { Box, Divider, ListItemIcon, ListItemText, Paper, Stack } from '@mui/material'
import React from 'react'

import SidebarMenuItem from './SidebarMenuItem'

const ImageWithFrame = () => (
  <Box
    bgcolor={'white'}
    padding={.5}
    maxHeight={50}
    borderRadius={1.5}
  >
    <img src='https://icsco.ai/wp-content/uploads/2022/06/logo-no-textbg-svg.svg' alt='' width={42} height={42} />
  </Box>
)


const LogoOrSideBar = () => {
  return (
    <React.Fragment>
      <Box display={{ xs: 'block', md: 'none' }}>
        <ImageWithFrame />
      </Box>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Paper
          elevation={5}
          sx={{
            padding: '5px 0',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100vh',
            borderRadius: '0 3rem 3rem 0',
          }}
        >
          <Stack padding='20px'>
            <ImageWithFrame />
          </Stack>
          <Divider />

          <Stack padding='20px'>
            <SidebarMenuItem>
              <ListItemIcon>
                <ListAltRounded />
              </ListItemIcon>
              <ListItemText>
                Place
              </ListItemText>
            </SidebarMenuItem>
          </Stack>
          <Divider />
        </Paper>
      </Box>
    </React.Fragment>
  )
}

export default LogoOrSideBar
