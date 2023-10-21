import React from 'react';

import { Box, InputBase, InputLabel, Typography } from '@mui/material';
import Link from 'next/link';
import { StyledButton } from '@/theme';

const ForgotPassword = () => {
  return (
    <Box mt="5%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: '30%',
          mx: 'auto',
          textAlign: 'left',
        }}
      >
        <Typography variant="h1" mb="10px" p={0}>
          Forgot your password ?
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb="30px">
          We’ll send you a link to reset it. Enter your email address used for My Dream Place
        </Typography>
        <InputLabel htmlFor="email-input" sx={{ mr: '65%' }}>
          Your email address
        </InputLabel>
        <InputBase
          required
          id="email-input"
          fullWidth
          sx={{
            m: '10px 0 20px 0',
            bgcolor: '#f4f4f4',
            borderRadius: '0.38rem',
            p: '12px',
          }}
        />
        <StyledButton
          variant="contained"
          size="large"
          fullWidth
          sx={{ mb: '15px', p: '12px 18px' }}
        >
          Send reset link
        </StyledButton>
        <Box display="flex" width="100%">
          <Typography variant="subtitle1" textAlign="center">
            By creating an account, you agree with our
            <Typography color="primary" variant="subtitle1" component="span" mx={1}>
              Terms and Conditions
            </Typography>
            and
            <Typography color="primary" variant="subtitle1" component="span" ml={1}>
              Privacy Statement.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
