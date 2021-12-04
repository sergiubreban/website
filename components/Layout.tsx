import { Box } from "@chakra-ui/layout"
import { FC } from "react"
import MenuBar from "./MenuBar"

const Layout: FC = (props) => {
  return <div>
    <MenuBar />
    <Box pt='6rem'>
      {props.children}
    </Box>
  </div>
}

export default Layout