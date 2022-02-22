import authAtom from '../recoil/auth';
import FirebaseRepository from 'repositories/firebase.repository';

const AuthController = {
    logout:
        ({ set }) =>
        async () => {
            set(authAtom, false);
        },
    login:
        ({ set }) =>
        async (keep) => {
            const status = await FirebaseRepository.login(keep);
            if (status) {
                await set(authAtom, true);
                return true;
            }
            return false;
        },
    loadAuth:
        ({ set }) =>
        async (callback) =>
            FirebaseRepository.isLogged((change) => {
                set(authAtom, change !== null);
                callback(false);
            })
};

export default AuthController;
