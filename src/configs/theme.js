import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  main_color: 'hsl(0, 0%, 54%)',
  dark_color: 'hsl(0, 0%, 26%)',
  bright_color: 'hsl(0, 0%, 77%)',
  background_color: 'hsl(228, 10%, 10%)',
  highlight: 'hsl(0, 78%, 18%)',
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 960px)',
  desktop: '(min-width: 961px)',
};

function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
