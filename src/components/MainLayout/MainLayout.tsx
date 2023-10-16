import { Box } from "@mui/material"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import styles from "./styles.module.css"

interface IProps {
  children: JSX.Element,
}

const MainLayout:React.FC<IProps> = ({children}) => {
  return (
    <>
     <Header/>
      <Box className={styles.boxMargin}>
        {children}
      </Box>
      <Footer/>
    </>
  )
}

export default MainLayout