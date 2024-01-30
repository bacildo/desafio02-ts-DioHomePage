import { Box } from "@chakra-ui/react"
import { Card } from "../components/Card"

export const Home = () =>{
  return(
   <Box>
    <Card id={1} loginMessage={"Realize o login"} buttonName= {'Login'}   />
  </Box>
  )
}
