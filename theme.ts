'use client';
import { Button, createTheme, styled } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#bfdbfe',
      '400': '#60a5fa',
      '500': '#2F80ED',
      '600': '#2563eb',
      '700': '#1d4ed8',
      '800': '#1e40af',
      '900': '#475993',
    },
    secondary: {
      A400: '#5f4f4f',
      '100': '#FCEFCA',
      '200': '#fde68a',
      '300': '#fcd34d',
      '400': '#F2C94C',
      '500': '#f59e0b',
      '600': '#F2994A',
      '700': '#b45309',
      '800': '#92400e',
      '900': '#78350f',
    },
    success: {
      main: '#219653',
      light: '#85E0AB',
    },
    error: {
      main: '#EB5757',
    },
    background: {
      default: '#FFF',
    },
  },
  typography: {
    fontFamily: ['SF Pro Display', 'Noto Sans Display', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '0.02rem',
    },
    h2: {
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '0.0225rem',
    },
    h3: {
      color: '#181818',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '0.01rem',
    },
    h4: {
      color: '#FFF',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '0.02rem',
    },
    h5: {
      color: '#FFF',
      fontSize: '0.8125rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '1.125rem',
      letterSpacing: '0.01625rem',
    },
    subtitle1: {
      color: 'var(--Gray-2, #4F4F4F)',
      fontSize: '0.8125rem', // 13px
      fontStyle: 'normal',
      fontWeight: 500,
      letterSpacing: '0.01625rem',
    },
    subtitle2: {
      color: 'var(--Gray-2, #4F4F4F)',
      fontSize: '0.8125rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '1.1375rem',
      letterSpacing: '0.01625rem',
    },
  },
});

export const StyledButton = styled(Button)({
  borderRadius: '0.38rem',
  display: 'flex',
  p: '12px 18px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0.02em',
  textAlign: 'left',
  textTransform: 'none',
});

export default theme;
