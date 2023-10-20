import * as React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { StyledButton } from '../../theme';
const SignUp = () => {
  return (
    <Box mt="10%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: '35vw',
          mx: 'auto',
        }}
      >
        <Typography variant="h3" mb="64px">
          Register
        </Typography>

        <TextField label="Email address" fullWidth sx={{ mb: '30px' }} />
        <StyledButton variant="contained" size="large" fullWidth>
          Continue With Email
        </StyledButton>
        <StyledButton
          size="large"
          fullWidth
          startIcon={
            <Image
              src="/../../assets/svg/googleDefault.png"
              alt="google-logo"
              width={20}
              height={20}
            />
          }
        >
          Continue With Google
        </StyledButton>
        <StyledButton
          size="large"
          fullWidth
          variant="contained"
          startIcon={
            <Image
              src="/../../assets/svg/facebook-logo.png"
              alt="google-logo"
              width={20}
              height={20}
            />
          }
        >
          Continue With Facebook
        </StyledButton>
      </Box>
    </Box>
  );
};

export default SignUp;
