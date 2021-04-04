class Joke {
    private id: string;
    private iconUrl: string;
    private url: string;
    private value: string;

    constructor(id = "", iconUrl = "", url = "", value = "") {
        this.id = id;
        this.iconUrl = iconUrl;
        this.url = url;
        this.value = value;
    }

    get getId(): string {
        return this.id;
    }

    set setId(id: string) {
        this.id = id;
    }

    get getIconUrl(): string {
        return this.iconUrl;
    }

    set setIconUrl(iconUrl: string) {
        this.iconUrl = iconUrl;
    }

    get getUrl(): string {
        return this.url;
    }

    set setUrl(url: string) {
        this.url = url;
    }

    get getValue(): string {
        return this.value;
    }

    set setValue(value: string) {
        this.value = value;
    }
}

export default Joke;