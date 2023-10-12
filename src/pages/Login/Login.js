import React, { useState } from 'react';
import httpCommon from '../../services/http-common';
import Cookies from 'js-cookie';
import { Container, WhiteContainer, Title, SaveButton } from './styles'
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../context/useContext';

function Login() {
  const navigate = useNavigate();
  const { setUser } = useMainContext();
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
      const res = await httpCommon.post('auth/login', formData);
      const { token } = res.data.token;
      const user = res.data.user;

      const resUser = await httpCommon.get(`/user/${user.userId}`);

      setUser(resUser.data)
      localStorage.setItem('user', JSON.stringify(resUser.data));

      // Save the token in a cookie
      Cookies.set('userToken', token, { expires: 1 }); // Expires in 1 day
          // Navigate to '/home' on successful login
      
      navigate('/home');

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Container>
    <WhiteContainer>
      <Title>התחברות</Title>
      <Input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <SaveButton onClick={handleLogin}>התחבר</SaveButton>
      <div onClick={() => navigate('/signup')}>להרשמה לחץ כאן</div>
      <div onClick={() => navigate('/forgotPassword')}>איפוס סיסמה</div>
      </WhiteContainer>
    </Container>
  );
}

export default Login;
