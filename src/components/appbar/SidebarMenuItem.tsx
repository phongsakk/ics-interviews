import { MenuItem, MenuItemProps, styled } from '@mui/material'

import { colors, text } from '../../utils/theme'

const SidebarMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiListItemIcon-root': {
    padding: '10px',
    backgroundColor: colors.deepBlue,
    borderRadius: '10px'
  },
  '& .MuiSvgIcon-root': {
    width: 36,
    height: 36,
    color: text.white,
  }
}))

export default SidebarMenuItem
