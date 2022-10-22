import { memo } from "react"

import { Link } from "@mui/material"
import { Box } from "@mui/system"

const Footer = () => (
  <Box
    component="footer"
    display="flex"
    justifyContent="center"
  >
    <Link
      variant="body1"
      href="https://yasminteles.com"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      Designed & Built by Yasmin Teles
    </Link>
  </Box>
)

export default memo(Footer)
