class Joke {

    constructor(
        private _id = "", 
        private _iconUrl = "",  
        private _url = "", 
        private _value = ""
    ) {
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get iconUrl(): string {
        return this._iconUrl;
    }

    set iconUrl(iconUrl: string) {
        this._iconUrl = iconUrl;
    }

    get url(): string {
        return this._url;
    }

    set url(url: string) {
        this._url = url;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}

export default Joke;