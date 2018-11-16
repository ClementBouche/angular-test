export class Ticket {

    _title: string;
    _description: string;
    _img: string;
    _rating: string;
    _nbPlaces: number;

    constructor(title, description, img, rating, nbPlaces = 10) {
        this._title = title;
        this._nbPlaces = nbPlaces;
        this._description = description;
        this._img = img;
        this._rating = rating;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

    get img() {
        return this._img;
    }

    set img(img) {
        this._img = img;
    }

    get rating() {
        return this._rating;
    }

    set rating(rating) {
        this._rating = rating;
    }

    get nbPlaces() {
        return this._nbPlaces;
    }

    set nbPlaces(nbPlaces) {
        this._nbPlaces = nbPlaces;
    }

}
