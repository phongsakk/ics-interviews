import { Stack, StackProps, styled } from '@mui/material'

const FoodImgStack = styled(Stack)<StackProps>({
  flexDirection: 'row',
  '.MuiBox-root': {
    "&:first-child": {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    "&:last-child": {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },
  }
})

export default FoodImgStack