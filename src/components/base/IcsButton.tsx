import { Button as MuiButton, ButtonProps, styled } from '@mui/material'
import { colors, text } from '../../utils/theme'

interface CustomButtonProps extends ButtonProps {
  active?: boolean
}

const IcsButton = styled(MuiButton)<CustomButtonProps>(({ disabled, active }) => ({
  paddingBlock: '4px',
  paddingInline: '14px',
  borderRadius: '21px',
  color: text.white + ' !important',
  backgroundColor: disabled ? colors.grey : active ? colors.deepBlue : colors.default,
  ":hover": {
    backgroundColor: disabled ? colors.grey : colors.deepBlue,
  }
}))

export default IcsButton