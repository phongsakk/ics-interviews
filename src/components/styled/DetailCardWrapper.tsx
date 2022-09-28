import { Card, CardProps, styled } from '@mui/material'

const DetailCardWrapper = styled(Card)<CardProps>({
  borderRadius: '10px',
  '.MuiCardMedia-root': {
    height: 200
  }
})

export default DetailCardWrapper