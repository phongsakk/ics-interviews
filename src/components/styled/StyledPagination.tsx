import { Pagination, PaginationProps, styled } from "@mui/material"
import { colors, text } from "../../utils/theme"

const StyledPagination = styled(Pagination)<PaginationProps>({
  '& .MuiPagination-ul': {
    '& .MuiPaginationItem-root': {
      '&:hover': {
        backgroundColor: colors.fadeBlue,
      },
      '&.Mui-selected': {
        border: '1px solid ' + colors.default,
        backgroundColor: colors.default,
        color: text.white,
        '&:hover': {
          backgroundColor: colors.deepBlue,
          color: text.white,
        }
      },
    },

  }
})

export default StyledPagination