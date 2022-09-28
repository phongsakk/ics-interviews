import { Box } from '@mui/material'

import { colors } from '../../utils/theme'

interface IProps {
  src: string
}

const PlaceAvatar = ({ src }: IProps) => (
  <Box
    sx={{
      width: '60px',
      height: '60px',
      borderRadius: '10px',
      bgcolor: colors.grey,
      overflow: 'hidden',
      backgroundImage: `url('${src}')`,
      backgroundSize: 'cover'
    }}
  />)

export default PlaceAvatar