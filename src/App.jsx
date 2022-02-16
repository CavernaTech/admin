import { RecoilRoot } from 'recoil';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Theme from './utils/theme/theme.component';
import DashboardPage from './pages/dashboard';

function App() {
    return (
        <RecoilRoot>
            <Theme>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                </Routes>
            </Theme>
        </RecoilRoot>
    );
}

export default App;
