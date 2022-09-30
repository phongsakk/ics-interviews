import { Box, BoxProps, styled } from "@mui/material"

import { colors } from "../../utils/theme"

const ControlButton = styled(Box)<BoxProps>({
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  top: 'calc(50% - 11px)',
  padding: '8px',
  width: '22px',
  height: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  color: colors.grey,
  '&:hover, &:focus': {
    backgroundColor: colors.fadeBlue,
  },
  '&:first-of-type': {
    left: '4px'
  },
  '&:last-child': {
    right: '4px'
  },
})

export default ControlButton