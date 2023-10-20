import * as React from 'react';
import { Box, InputBase, InputLabel, Typography } from '@mui/material';
import Image from 'next/image';
import { StyledButton } from '../../theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
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
          sx={{ bgcolor: 'primary[900]' }}
          startIcon={<FacebookIcon />}
        >
          Continue With Facebook
        </StyledButton>
        <Typography variant="h3" mt={7} mr={5}>
          Already have an account ? <Link href="/signin"> Sign In</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
