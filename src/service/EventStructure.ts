class EventStructure {

    constructor(
        private _type: string, 
        private _callback: (payload?: any) => void
    ) {   
    }

    get type(): string {
        return this._type;
    }

    set type(type: string) {
        this._type = type;
    }

    get callback(): (payload?: any) => void {
        return this._callback;
    }

    set callback(callback: (payload?: any) => void) {
        this._callback = callback;
    }

    public handle(payload?: any): void {
        this._callback(payload);
    }
}

export default EventStructure;