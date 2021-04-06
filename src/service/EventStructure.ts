class EventStructure {

    constructor(
        private type: string, 
        private callback: (payload?: any) => void
    ) {   
    }

    get getType(): string {
        return this.type;
    }

    set setType(type: string) {
        this.type = type;
    }

    get getCallback(): (payload?: any) => void {
        return this.callback;
    }

    set setCallback(callback: (payload?: any) => void) {
        this.callback = callback;
    }

    public handle(payload?: any): void {
        this.callback(payload);
    }
}

export default EventStructure;