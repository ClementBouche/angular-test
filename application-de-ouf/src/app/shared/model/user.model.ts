export class User {

    _pseudo: string;
    _createdAt: string;
    _role: string;

    constructor(pseudo, createdAt, role) {
        this._pseudo = pseudo;
        this._createdAt = createdAt;
        this._role = role;
    }

    get pseudo() {
        return this._pseudo;
    }

    set pseudo(pseudo) {
        this._pseudo = pseudo;
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt) {
        this._createdAt = createdAt;
    }

    get role() {
        return this._role;
    }

    set role(role) {
        this._role = role;
    }
}
