import EventStructure from '@/service/EventStructure';

class EventBusService {

    private _id = 0;
    private static _eventBusService: EventBusService;
    private _subscriptions: EventStructure[] = [];

    public static getEventBusService(): EventBusService {
        if (!this._eventBusService) {
            this._eventBusService = new EventBusService;
        }

        return this._eventBusService;
    }

    public subscribe(eventType: string, callback: (payload?: any) => void) {
        this._subscriptions[this._id] = new EventStructure(eventType, callback);

        this.incrementId();
    }

    public publish(eventType: string, payload?: any) {
        const event: EventStructure|null = this.findEvent(eventType);
        if (event) {
            event.handle(payload);
        }
    }

    public unsubscribe() {
        this._subscriptions = [];
    }

    private findEvent(eventType: string): EventStructure|null{
        for (const subscription of this._subscriptions) {
            if (subscription.type === eventType) {
                return subscription;
            }
        }

        return null;
    }

    private incrementId() {
        this._id += 1;
    }
}

export default EventBusService.getEventBusService();