import authAtom from '../recoil/auth';

const AuthController = {
    logout:
        ({ set }) =>
        async () => {
            set(authAtom, false);
        },
    login:
        ({ set }) =>
        async () => {
            await set(authAtom, true);
            return true;
        }
};

export default AuthController;
