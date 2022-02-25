import { useRecoilValue } from 'recoil';

import DashboardPage from '../pages/dashboard';
import { withStatus } from '../recoil/contato';

function DashboardContainer(props) {
    const state = {
        rows: useRecoilValue(withStatus)
    };
    const functions = {};
    return <DashboardPage {...state} {...functions} {...props} />;
}

export default DashboardContainer;
