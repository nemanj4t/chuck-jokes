class Joke {

    constructor(
        private id = "", 
        private iconUrl = "",  
        private url = "", 
        private value = ""
    ) {
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