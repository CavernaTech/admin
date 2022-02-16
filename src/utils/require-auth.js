/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { withStatus } from '../recoil/auth';

function RequireAuth({ children: Children, redirect }) {
    const isLogged = useRecoilValue(withStatus);
    return isLogged ? Children : <Navigate to={redirect} push />;
}

RequireAuth.defaultProps = {
    children: <div />,
    redirect: '/login'
};

RequireAuth.propTypes = {
    children: PropTypes.node,
    redirect: PropTypes.string
};

export default RequireAuth;
