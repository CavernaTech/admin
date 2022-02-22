import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';

import Theme from './utils/theme/theme.component';
import DashboardPage from './pages/dashboard';
import RequireAuth from './utils/require-auth';
import LoginContainer from 'containers/login.container';
import AuthController from 'controllers/auth.controller';

function App() {
    const [loading, setLoading] = useState(true);
    useRecoilCallback(AuthController.loadAuth)(setLoading);

    if (!loading) {
        return (
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
        );
    }
    return <p>carregando</p>;
}

export default App;
