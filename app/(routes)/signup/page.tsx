import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Divider, InputBase, InputLabel, Typography } from '@mui/material';

import { StyledButton } from '../../../theme';

const SignUp = () => {
  return (
    <Box mt="8%">
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
        <Typography variant="h1" mb="64px">
          Register
        </Typography>
        <InputLabel htmlFor="email-input" sx={{ mr: '74%' }}>
          Email address
        </InputLabel>
        <InputBase
          id="email-input"
          fullWidth
          sx={{
            m: '10px 0 30px 0',
            bgcolor: '#f4f4f4',
            borderRadius: '0.38rem',
            p: '12px',
          }}
        />
        <StyledButton
          variant="contained"
          size="large"
          fullWidth
          sx={{ mb: '30px', p: '12px 18px' }}
        >
          Continue With Email
        </StyledButton>
        <Box width="100%" mb={1}>
          <Divider>or use one of these options</Divider>
        </Box>

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
          justifyContent="space-between"
          my={4}
        >
          <Typography variant="h3">Already have an account ?</Typography>
          <Link href="/signin" style={{ textDecoration: 'none', marginLeft: '8px' }}>
            <Typography color="primary">Sign In</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
