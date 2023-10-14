import { TextField } from "@mui/material"
import Header from "../Header/Header"
import CardMovie from "../CardMovie/CardMovie"

const MainLayout = () => {
  return (
    <>
     <Header/>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <CardMovie/>
    </>
  )
}

export default MainLayout