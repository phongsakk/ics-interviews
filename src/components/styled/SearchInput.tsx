import { InputBase, InputBaseProps, styled } from '@mui/material'
import { colors } from '../../utils/theme'

export const SearchInput = styled(InputBase)<InputBaseProps>({
  '&.MuiInputBase-root': {
    border: `1px solid ${colors.default}`,
    backgroundColor: '#FFFFFF',
    borderRadius: '50px !important',
    padding: '8px 12px',
    height: '40px',
    outline: 'none',
    boxShadow: 'none',
    lineHeight: '24px',
  },
  '& .MuiInputBase-input': {
    padding: 0,
  }
})

export default SearchInput
