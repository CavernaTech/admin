import { atom } from 'recoil';

const contatoAtom = atom({
    key: 'contatoAtom', // unique ID (with respect to other atoms/selectors)
    default: [] // default value (aka initial value)
});

export default contatoAtom;
