import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import {
  Avatar, Badge, Box, Divider, IconButton, ListItemIcon, ListItemText, Menu,
  MenuItem, styled, Tooltip, Typography, TypographyProps
} from '@mui/material'
import { HourglassBottom, KeyboardArrowDown, Logout, Notifications } from '@mui/icons-material'

import useUserProfile from '../../context/useUserProfile'
import { text } from '../../utils/theme'

const ProfileText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: text.white,
  marginLeft: '1rem',
  fontWeight: 'lighter'
}))

const desktopOnly = { xs: 'none', md: 'block' }

const ProfileAvatar = () => {
  const { isLogin, user, handleGoogleLogin, handleGoogleLogout } = useUserProfile()
  const [userMenuOpen, setUserMenuOpen] = React.useState<HTMLElement>()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuOpen(event.currentTarget)
  }

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuOpen(undefined)
  }

  return (
    <React.Fragment>
      <Box color={text.white} display='flex' flexDirection='row'>
        {isLogin ? (
          <React.Fragment>
            <IconButton sx={{ display: desktopOnly, width: 48, height: 48 }}>
              <Badge
                variant='dot'
                color='error'
                badgeContent={1}
                overlap='circular'
                sx={{
                  '& .MuiBadge-dot': {
                    border: '1px solid #FFFFFF',
                    width: 10,
                    height: 10,
                    top: '25%',
                    right: '25%',
                    borderRadius: '50%'
                  }
                }}
              >
                <Notifications htmlColor='#ffffff' />
              </Badge>
            </IconButton>
            <Tooltip title='Profile Menu' disableInteractive arrow placement='bottom'>
              <IconButton
                disableFocusRipple
                disableTouchRipple
                onClick={handleOpenUserMenu}
                sx={{
                  borderRadius: { xs: '50%', md: '2rem' }
                }}
              >
                <Avatar src={user?.picture} alt={user?.given_name} />
                <ProfileText sx={{ display: desktopOnly }}>
                  {user?.given_name}
                </ProfileText>
                <KeyboardArrowDown
                  htmlColor={text.white}
                  sx={{ display: desktopOnly, ml: 1 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              anchorEl={userMenuOpen}
              open={Boolean(userMenuOpen)}
              onClose={handleCloseUserMenu}
              sx={{
                '.MuiMenuItem-root': {
                  minWidth: 180
                },
              }}
            >
              <MenuItem disabled>
                <ListItemIcon>
                  <HourglassBottom fontSize="small" />
                </ListItemIcon>
                <ListItemText>Menu 1</ListItemText>
              </MenuItem>
              <MenuItem disabled>
                <ListItemIcon>
                  <HourglassBottom fontSize="small" />
                </ListItemIcon>
                <ListItemText>Menu 2</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={(event) => {
                handleCloseUserMenu(event)
                handleGoogleLogout()
              }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </React.Fragment>
        ) : (
          <Box height={40} display='flex' alignItems='center'>
            <GoogleLogin onSuccess={handleGoogleLogin} />
          </Box>
        )}
      </Box>
      <>
      </>
    </React.Fragment>
  )
}

export default ProfileAvatar
