import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toast';
import {
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import styles from '../styles/Login.module.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://dummyjson.com/auth/login',
        headers: { 'Content-Type': 'application/json' },
        data: {
          username: user,
          password: password,
          // username: 'kminchelle',
          // password: '0lelplR',
        },
      });

      userContext?.setUser({
        email: response.data.email,
        firstName: response.data.firstName,
        gender: response.data.gender,
        id: response.data.id,
        image: response.data.image,
        lastName: response.data.lastName,
        token: response.data.token,
        username: response.data.username,
      });
      navigate('profile');
      toast.success('Login realizado com sucesso!!!');
    } catch (err) {
      toast.error('Verifique o seu usuario e senha...');
      setUser('');
      setPassword('');
      console.error(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.frame}>
          <img src="/screen.png" className={styles.image} alt="frame" />
        </div>
        <div className={styles.form}>
          <div>
            <img src="/logo.png" alt="logo" className={styles.form__image} />
          </div>
          <div>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="user">Usuário *</InputLabel>
              <OutlinedInput
                id="user"
                value={user}
                onChange={(event) => setUser(event.target.value)}
                endAdornment={<InputAdornment position="end" />}
                label="Usuário"
              />
              <FormHelperText id="user-helper">
                Usuário é obrigatório
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="password">Senha *</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'password' : 'text'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="warning" />
                      ) : (
                        <Visibility color="warning" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText id="password-helper">
                Senha é obrigatória
              </FormHelperText>
            </FormControl>
          </div>
          <div className={styles.form__button__div}>
            <Button
              variant="contained"
              color="warning"
              className={styles.form__button}
              type="button"
              onClick={handleButtonClick}
            >
              <p className={styles.form__button__label}>Continuar</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
