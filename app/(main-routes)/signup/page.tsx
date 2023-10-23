'use client';

import * as React from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';

import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Divider, InputBase, InputLabel, Typography } from '@mui/material';

import { StyledButton } from '../../../theme';

const SignUp = () => {
  let search;
  // const router = useRouter();
  const searchParams = useSearchParams();
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(30, ' email must be 30 characteres or less')
        .required('Please Enter your email'),
    }),
    onSubmit: (values) => {
      search = searchParams.get('email');
      // router.push('/checkinbox');
    },
  });
  return (
    <Box mt="8%">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '25vw',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        {search}
        <Typography variant="h1" mb="64px">
          Register
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ margin: '0', padding: '0', width: '100%' }}>
          <InputLabel htmlFor="email-input">Email address</InputLabel>
          <InputBase
            error={formik.errors.email === typeof ''}
            name="email"
            id="email-input"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            sx={{
              m: '10px 0',
              bgcolor: '#f4f4f4',
              borderRadius: '0.38rem',
              p: '12px',
            }}
          />
          <Typography color="error" mb="20px" variant="body2">
            {formik.errors.email}
          </Typography>
          <StyledButton
            variant="contained"
            size="large"
            type="submit"
            fullWidth
            sx={{ mb: '30px', p: '12px 18px' }}
          >
            Continue With Email
          </StyledButton>
        </form>
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
