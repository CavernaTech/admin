import { RecoilRoot } from 'recoil';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Theme from './utils/theme/theme.component';
import DashboardPage from './pages/dashboard';
import RequireAuth from './utils/require-auth';
import LoginContainer from 'containers/login.container';

function App() {
    return (
        <RecoilRoot>
            <Theme>
                <CssBaseline />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <DashboardPage />
                                </RequireAuth>
                            }
                        />
                        <Route path="/login" element={<LoginContainer />} />
                    </Routes>
                </main>
            </Theme>
        </RecoilRoot>
    );
}

export default App;
