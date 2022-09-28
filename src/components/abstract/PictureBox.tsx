import { Box } from "@mui/material";

import { colors } from "../../utils/theme";

const PictureBox = ({ src }: { src: string }) => (
  <Box sx={{
    width: '120px',
    height: '120px',
    backgroundColor:
      colors.grey,
    backgroundImage: `url('${src}')`,
    backgroundSize: 'cover',
  }}
  />
)

export default PictureBox