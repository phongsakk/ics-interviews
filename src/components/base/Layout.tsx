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
  display: 'flex',
  backgroundColor: colors.default,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
}))

const Layout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <CustomAppBar elevation={0}>
        <LogoOrSideBar />
        <ProfileAvatar />
      </CustomAppBar>
      <Box minHeight={'1000vh'}>
        <Toolbar />
        <Container sx={{ p: '9px' }}>
          {children}
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Layout