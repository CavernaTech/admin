import { selector } from 'recoil';

import contatoAtom from './contato.atom';

const withStatus = selector({
    key: 'withContatocontatoAtom',
    get: ({ get }) => {
        const contato = get(contatoAtom);

        return contato;
    }
});

export default withStatus;
