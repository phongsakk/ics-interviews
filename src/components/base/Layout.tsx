import { AppBar, AppBarProps, Box, styled, Toolbar }
  from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

import { colors } from '../../utils/theme'
import LogoOrSideBar from '../appbar/Logo'
import ProfileAvatar from '../appbar/ProfileAvatar'

interface IProps {
  children?: React.ReactNode
}

const CustomAppBar = styled(AppBar)<AppBarProps>(() => ({
  padding: '8px',
  height: 60,
  display: 'flex',
  backgroundColor: colors.default,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const Layout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <Box position='relative'>
        <CustomAppBar elevation={0}>
          <LogoOrSideBar />
          <ProfileAvatar />
        </CustomAppBar>
      </Box>
      <Box minHeight={'100vh'}>
        <Toolbar />
        <Container
          sx={{
            padding: {
              xs: '18px 9px',
              md: '18px 38px 18px 132px'
            },
            maxWidth: '100vw !important',
            marginX: 0,
          }}
        >
          {children}
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Layout