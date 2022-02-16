import { ThemeProvider, useMediaQuery } from '@mui/material';

import theme from './theme';

function Theme({ children }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return <ThemeProvider theme={theme(prefersDarkMode)}>{children}</ThemeProvider>;
}

export default Theme;
