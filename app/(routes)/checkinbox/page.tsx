import React from 'react';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { StyledButton } from '@/theme';
import Image from 'next/image';

const CheckInbox = () => {
  return (
    <Box mt="12%">
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
        <Image src="/images/default-logo.svg" alt="logo-svg" width={280} height={250} />
        <Typography variant="h1" mb="10px">
          Check Your Inbox
        </Typography>
        <Box display="flex" width="100%">
          <Typography variant="subtitle1" textAlign="center" my={2}>
            We have just emailed you the instrustions and a reset password link to
            Sumail_john@gmail.com. It might take a few minutes to arrive
          </Typography>
        </Box>

        <StyledButton
          variant="contained"
          size="large"
          fullWidth
          sx={{ mb: '15px', p: '12px 18px' }}
        >
          <Typography>
            <Link
              href="/signin"
              style={{ textDecoration: 'none', marginLeft: '8px', color: 'inherit' }}
            >
              Back to Sign in
            </Link>
          </Typography>
        </StyledButton>
      </Box>
    </Box>
  );
};

export default CheckInbox;
