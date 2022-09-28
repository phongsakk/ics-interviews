import { Grid, GridProps, styled } from '@mui/material'

import { colors, text } from '../../utils/theme'

interface StyledSliderProps extends GridProps {
  current: number
}

const StyledSlider = styled(Grid, { shouldForwardProp: (props) => props !== 'current' })<StyledSliderProps>(({ theme, current }) => ({
  height: '36px',
  width: '100%',
  backgroundColor: text.white,
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '30px',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingInline: '14px',
  position: 'relative',
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    height: '36px',
    width: 'calc(50% + 14px)',
    left: current === 0 ? 0 : 'auto',
    right: current === 1 ? 0 : 'auto',
    bottom: 0,
    backgroundColor: colors.default,
    borderRadius: '30px',
    zIndex: 10,
  }
}))

export default StyledSlider