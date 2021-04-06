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

    public subscribe(eventType: string, callback: (payload?: any) => void, descriptor: string) {
        this._subscriptions[this._id] = new EventStructure(eventType, callback, descriptor);

        this.incrementId();
    }

    public publish(eventType: string, descriptor: string, payload?: any) {
        const eventId: number|null = this.findEventId(eventType, descriptor);

        if (eventId != null) {
            this._subscriptions[eventId].handle(payload);
        }
    }

    public unsubscribe(eventType: string, descriptor: string) {
        const eventId = this.findEventId(eventType, descriptor);
        
        if (eventId != null) {
            this._subscriptions.splice(eventId, 1);
        }
    }

    private findEventId(eventType: string, descriptor: string): number|null{
        for (const { index, subscription } of this._subscriptions.map((subscription, index) => ({index, subscription}))) {
            if (subscription.type === eventType && subscription.descriptor === descriptor) {
                return index;
            }
        }

        return null;
    }

    private incrementId() {
        this._id += 1;
    }
}

export default EventBusService.getEventBusService();