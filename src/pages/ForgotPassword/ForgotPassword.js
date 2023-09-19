import React, {useState} from 'react';
import httpCommon from '../../services/http-common';
import Cookies from 'js-cookie';
import { Container, WhiteContainer, Title, SaveButton, StyledInput } from '../Login/styles'
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      identityProvider: 'password', // Assuming this is the identity provider
      username: '',
      password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
      try {
        const response = await httpCommon.post('auth/forgotPassword', formData);
        const { token } = response.data;

        // Save the token in a cookie
        Cookies.set('userToken', token, { expires: 1 }); // Expires in 1 day
            // Navigate to '/home' on successful login
        navigate('/home');

      } catch (error) {
        console.error('Login error:', error);
      }
    };

    return(
        <Container>
        <WhiteContainer>
          <Title>איפוס סיסמה</Title>
          <StyledInput
            type="number"
            name="personalNumber"
            value={formData.personalNumber}
            onChange={handleChange}
            placeholder="מספר אישי"
          />
          <StyledInput
            type="text"
            name="forgotPassword"
            value={formData.forgotPassword}
            onChange={handleChange}
            placeholder="שם נעורים של אמא"
            />
          <StyledInput
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="סיסמה חדשה"
          />
          <SaveButton onClick={handleLogin}>התחבר</SaveButton>
          <div onClick={() => navigate('/signup')}>להרשמה לחץ כאן</div>
          <div>איפוס סיסמה</div>
          </WhiteContainer>
        </Container>
    )
}