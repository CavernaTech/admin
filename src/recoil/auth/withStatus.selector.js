import { selector } from 'recoil';

import authAtom from './auth.atom';

const withStatus = selector({
    key: 'withStatusAuthAtom',
    get: ({ get }) => {
        const auth = get(authAtom);

        return auth;
    }
});

export default withStatus;
