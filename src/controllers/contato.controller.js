import { useRecoilCallback } from 'recoil';

import contatoAtom from '../recoil/contato';
import FirebaseRepository from 'repositories/firebase.repository';
import ContatoModel from '../models/contato.model';

function setContatosFromData({ set }) {
    return async (data) => {
        const items = [];
        const values = data.val();
        Object.keys(values).forEach((key) => items.push(ContatoModel.FromJSON(values[key])));
        set(contatoAtom, items);
    };
}

const ContatoController = {
    setContatosFromData,
    useContatos: () => FirebaseRepository.listenContatos(useRecoilCallback(setContatosFromData))
};

export default ContatoController;
