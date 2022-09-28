import { Box } from '@mui/material'

interface IProps {
  showInmobileView: boolean
}

const InformationCard = ({ showInmobileView }: IProps) => {
  return (
    <Box
      sx={{
        display: { xs: showInmobileView ? 'block' : 'none', md: 'block' }
      }}
    >
      InformationCard
    </Box >
  )
}

export default InformationCard