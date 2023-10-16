import { Box } from "@mui/material"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { MovieGrid } from "../MovieGrid/MovieGrid"
import styles from "./styles.module.css"

const MainLayout = () => {
  return (
    <>
     <Header/>
      <Box className={styles.boxMargin}>
       <MovieGrid/>
       {/* <Login /> */}
      </Box>
      <Footer/>
    </>
  )
}

export default MainLayout