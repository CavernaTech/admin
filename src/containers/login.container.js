const { default: AuthController } = require('controllers/auth.controller');
const { default: LoginPage } = require('pages/login.page');
const { useRecoilCallback } = require('recoil');

function LoginContainer(props) {
    const state = {};
    const functions = {
        login: useRecoilCallback(AuthController.login)
    };
    return <LoginPage {...state} {...functions} {...props} />;
}

export default LoginContainer;
