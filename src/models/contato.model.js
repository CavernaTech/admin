class ContatoModel {
    email;

    name;

    tel;

    subject;

    agreement;

    message;

    constructor({ email, name, tel, subject, agreement, message }) {
        this.email = email;
        this.name = name;
        this.tel = tel;
        this.subject = subject;
        this.agreement = agreement;
        this.message = message;
    }

    FromJSON(json) {
        return this({
            ...json,
            agreement: new Date(json.agreement)
        });
    }
}

export default ContatoModel;
