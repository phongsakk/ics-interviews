import { Card, CardProps, styled } from '@mui/material'

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  width: 400,
  height: 225,
  borderRadius: '10px',
  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.down('md')]: {
    height: 'auto'
  },

  '.MuiCardHeader-root': {
    paddingBottom: '11px',
    [theme.breakpoints.down('md')]: {
      padding: 0,
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      height: 'auto',
    }
  },

  '.MuiCardHeader-avatar': {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '87px',
    }
  },

  '.MuiCardHeader-content': {
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      padding: '9px',
      width: '100%',
    }
  },

  '.MuiCardContent-root': {
    paddingTop: '0',
    paddingInline: '20px'
  },
}))

export default StyledCard
