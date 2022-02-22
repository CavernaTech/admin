import PropTypes from 'prop-types';
import { ThemeProvider, useMediaQuery } from '@mui/material';

import theme from './theme';

function Theme({ children }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return <ThemeProvider theme={theme(prefersDarkMode)}>{children}</ThemeProvider>;
}

Theme.propTypes = {
    children: PropTypes.node
};

export default Theme;
