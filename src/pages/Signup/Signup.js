import React, { useState } from 'react';
import httpCommon from '../../services/http-common'; // Assuming you're using Axios for HTTP requests
import { useNavigate } from 'react-router-dom'; // For navigation
import Cookies from 'js-cookie'; // For managing cookies
import { Container, WhiteContainer, Title, SaveButton, StyledInput, Text } from '../Login/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identityProvider: 'password',
    username: '',
    password: '',
    personalNumber: '',
    phoneNumber: '',
    additionalPhoneNumbers: '',
    idNumber: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await httpCommon.post('/auth/signup', formData);
      const { token } = response.data;

      // Save the token in a cookie
      Cookies.set('userToken', token, { expires: 1 }); // Expires in 1 day

      // Redirect to the '/home' page or any other desired page after successful signup
      navigate('/home');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup error, show an error message, etc.
    }
  };

  return (
    <Container>
    <WhiteContainer>
      <Title styles={{margin: '1rem'}}>הרשמה</Title>
      <Text>פרטים אישיים</Text>
      <StyledInput
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="שם מלא"
      />
      <StyledInput
        type="number"
        name="idNumber"
        value={formData.idNumber}
        onChange={handleChange}
        placeholder="תעודת זהות"
      />
      <StyledInput
        type="number"
        name="personalNumber"
        value={formData.personalNumber}
        onChange={handleChange}
        placeholder="מספר אישי"
      />
      <StyledInput
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="טלפון"
      />
      <StyledInput
        type="number"
        name="additionalPhoneNumbers"
        value={formData.additionalPhoneNumbers}
        onChange={handleChange}
        placeholder="מספר טלפון נוסף"
      />
      <Select
          labelId="demo-simple-select-label"
          name="gender"
          value={formData.gender}
          label="מגדר"
          onChange={handleChange}
        >
          <MenuItem value="female">אישה</MenuItem>
          <MenuItem value="male">גבר</MenuItem>
          <MenuItem value={null}>אחר</MenuItem>
        </Select>
      <Text>סיסמה (בעלת 6 תווים לפחות)</Text>
      <StyledInput
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="סיסמה"
      />
      <Text>שאלה לאיפוס סיסמה</Text>
      <StyledInput
        type="text"
        name="forgotPassword"
        value={formData.forgotPassword}
        onChange={handleChange}
        placeholder="שם נעורים של אמא"
      />
      <SaveButton onClick={handleSignup}>הרשם</SaveButton>
    </WhiteContainer>
    </Container>
  );
}

export default Signup;
