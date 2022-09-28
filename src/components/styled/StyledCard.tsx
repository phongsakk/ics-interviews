import { Card, CardProps, styled } from '@mui/material'

const StyledCard = styled(Card)<CardProps>({
  width: 400,
  height: 225,
  borderRadius: '10px',
  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
  '.MuiCardHeader-root': {
    paddingBottom: '11px',
  },
  '.MuiCardContent-root': {
    paddingTop: '0',
    paddingInline: '20px'
  },
})

export default StyledCard
