import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import '../../assets/css/AuthCard.css';
import Icon from "../../assets/images/icon.PNG";

// Style pour les champs TextField
const textStyle = {
  '& input': {
    fontSize: '18px',
  },
};

export default function AuthScreen() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={Icon} alt="Icon" style={{ width: '50%', marginBottom: '2px' }} />
        <h2 style={{ color: '#006400' }}>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>

        <form className="auth-form">
          {!isSignIn && (
            <>
              <TextField
                label="Prénom"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={textStyle}
                required
              />
              <TextField
                label="Nom"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={textStyle}
                required
              />
              <TextField
                label="Numéro"
                variant="outlined"
                type="tel"
                fullWidth
                margin="normal"
                sx={textStyle}
                required
              />
            </>
          )}

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            sx={textStyle}
            required
          />

          <TextField
            label="Mot de passe"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            sx={textStyle}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {!isSignIn && (
            <TextField
              label="Confirmer le mot de passe"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              sx={textStyle}
              required
            />
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isSignIn ? 'Se connecter' : "S'inscrire"}
          </Button>
        </form>

        <p className="switch-mode">
          {isSignIn ? "Pas encore de compte ?" : 'Déjà un compte ?'}{' '}
          <button className="link" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "S'inscrire" : 'Se connecter'}
          </button>
        </p>
      </div>
    </div>
  );
}
