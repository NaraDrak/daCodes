import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createGuestSession } from "../../services/guesstLogin";
import styles from './styles.module.css';
interface IProps {

}

const Login: React.FC<IProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length > 7;
  const isFormValid = isEmailValid && isPasswordValid && isChecked;
  const navigate = useNavigate();

  const handleGuesstLogin = async (): Promise<void> => {
    if (isFormValid) {
      const response = await createGuestSession();
      if (response.success) {
        localStorage.setItem('guest_session_id', response.guest_session_id);
        navigate('/movies');
      } else {
        console.log('Error en el login:', response);
      }
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
        <label>
          Correo electrónico de DaCodes
          <input
            className={styles.inputField}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contraseña
          <input
            className={styles.inputField}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <FormControlLabel
          className={styles.checkboxContainer}
          label={<Typography fontStyle={"italic"} fontSize={12}>He leído y acepto los términos y condiciones</Typography>}
          control={<Checkbox color="secondary" style={{ color: "gray" }} checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />}
          labelPlacement="end"
          sx={{ marginY: 2 }}
        />

        <Button onClick={handleGuesstLogin} sx={{ fontSize: "21px", background: !isFormValid ? 'gray' : '' }} disabled={!isFormValid}>Crear cuenta</Button>
      </form>
    </Box>
  );
}

export default Login;
