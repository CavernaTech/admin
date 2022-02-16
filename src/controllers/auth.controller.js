import authAtom from '../recoil/auth';

const AuthController = {
    logout:
        ({ set }) =>
        async () => {
            set(authAtom, false);
        },
    login:
        ({ snapshot, set }) =>
        async (username, password) => {
            const auth = await snapshot.getPromise(authAtom);
            if (password === '145823') {
                await set(authAtom, true);
                return true;
            }
            return false;
        }
};

export default AuthController;
