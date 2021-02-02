import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  // colors
  MAIN_COLOR: 'hsl(0, 0%, 54%)',
  DARK_COLOR: 'hsl(0, 0%, 26%)',
  BRIGHT_COLOR: 'hsl(0, 0%, 77%)',
  BACKGROUND_COLOR: 'hsl(228, 10%, 10%)',
  HIGHLIGHT: 'hsl(0, 78%, 18%)',
  // breakpoints
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 960px)',
  // font sizes
  NORMAL_SIZE: '1rem', // 16px
  SMALL_SIZE: '0.75rem', // 12px
  BIG_SIZE: '1.5rem', // 24px
  HUGE_SIZE: '2rem', // 32px
  GIANT_SIZE: '2.5rem', // 40px
};

function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
