import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import styles from './styles.module.css';
import { createGuestSession } from "../../services/guesstLogin";
import {useState} from 'react'
interface IProps {

}

const Login:React.FC<IProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length > 7;
  const isFormValid = isEmailValid && isPasswordValid && isChecked;

  const handleGuesstLogin = async ():Promise<void>=>{
      if (isFormValid) {
        const x = await createGuestSession();
        console.log('objeto de login', x)
      }
    }
  

  return (
    <Box className={styles.container}>
       <Box className={styles.titleContainer}>
        <Typography variant="h4" color="white" fontWeight={700} gutterBottom className={styles.title}>
        Login
        </Typography>
        <Typography variant="subtitle1" color="secondary" gutterBottom className={styles.subtitle}>
        ¡Bienvenido!
        </Typography>
       </Box>
     
    
    <form className={styles.form}>
      <TextField
        fullWidth
        margin="normal"
        label="Correo electrónico de DaCodes"
        variant="filled"
        color="secondary"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Contraseña"
        variant="filled"
        color="secondary"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      
      <FormControlLabel
        className={styles.checkboxContainer}
        label={<Typography fontStyle={"italic"} fontSize={12}>He leído y acepto los términos y condiciones</Typography>}
        control={<Checkbox color="secondary" style ={{color: "gray"}} checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>}
        labelPlacement="end"
        sx={{ marginY: 2 }}
      />
      
      <Button onClick={handleGuesstLogin} sx={{fontSize:"21px", background: !isFormValid ? 'gray': ''}} disabled={!isFormValid}>Crear cuenta</Button>
    </form>
  </Box>
  );
}

export default Login;
