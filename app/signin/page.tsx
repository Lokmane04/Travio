import * as React from 'react';
import {
  Box,
  InputBase,
  InputLabel,
  Typography,
  Checkbox,
  FormControlLabel,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import { StyledButton } from '../../theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
const SignUp = () => {
  return (
    <Box mt="5%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: '25vw',
          mx: 'auto',
          textAlign: 'left',
        }}
      >
        <Typography variant="h1" mb="40px">
          Sign in
        </Typography>
        <InputLabel htmlFor="email-input" sx={{ mr: '74%' }}>
          Email address
        </InputLabel>
        <InputBase
          id="email-input"
          fullWidth
          sx={{
            m: '10px 0 20px 0',
            bgcolor: '#f4f4f4',
            borderRadius: '0.38rem',
            p: '12px',
          }}
        />
        <InputLabel htmlFor="password-input" sx={{ mr: '74%' }}>
          Password
        </InputLabel>
        <InputBase
          type="password"
          id="password-input"
          fullWidth
          sx={{
            my: '10px',
            bgcolor: '#f4f4f4',
            borderRadius: '0.38rem',
            p: '12px',
          }}
        />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          my={1}
          width="100%"
          justifyContent="space-between"
        >
          <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
          <Link href="/forgotpassword" color="blue" style={{ textDecoration: 'none' }}>
            <Typography color="primary">Forgot Password ?</Typography>
          </Link>
        </Box>
        <StyledButton
          variant="contained"
          size="large"
          fullWidth
          sx={{ mb: '30px', p: '12px 18px' }}
        >
          Continue With Email
        </StyledButton>
        <Typography>or use one of these options</Typography>
        <StyledButton
          variant="outlined"
          size="large"
          fullWidth
          sx={{ m: '10px 0', color: '#4f4f4f', border: '1px solid #E0E0E0' }}
          startIcon={
            <Image src="/images/googleDefault.png" alt="google-logo" width={20} height={20} />
          }
        >
          Continue With Google
        </StyledButton>
        <StyledButton
          size="large"
          fullWidth
          variant="contained"
          sx={{ bgcolor: 'primary.dark' }}
          startIcon={<FacebookIcon />}
        >
          Continue With Facebook
        </StyledButton>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          my={4}
          justifyContent="space-between"
        >
          <Typography variant="h3">Don't Have an account ?</Typography>
          <Link href="/signin" color="blue" style={{ textDecoration: 'none', marginLeft: '8px' }}>
            <Typography color="primary">Sign In</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
