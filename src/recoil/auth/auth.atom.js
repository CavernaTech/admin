import { atom } from 'recoil';

const authAtom = atom({
    key: 'authAtom', // unique ID (with respect to other atoms/selectors)
    default: false // default value (aka initial value)
});

export default authAtom;
