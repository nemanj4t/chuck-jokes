import EventStructure from '@/service/EventStructure';

class EventBusService {

    private id = 0;
    private static eventBusService: EventBusService;
    private subscriptions: EventStructure[] = [];

    public static getEventBusService(): EventBusService {
        if (!this.eventBusService) {
            this.eventBusService = new EventBusService;
        }

        return this.eventBusService;
    }

    public subscribe(eventType: string, callback: (payload?: any) => void) {
        this.subscriptions[this.id] = new EventStructure(eventType, callback);

        this.incrementId();
    }

    public publish(eventType: string, payload?: any) {
        const event: EventStructure|null = this.findEvent(eventType);
        if (event) {
            event.handle(payload);
        }
    }

    public unsubscribe() {
        this.subscriptions = [];
    }

    private findEvent(eventType: string): EventStructure|null{
        for (const subscription of this.subscriptions) {
            if (subscription.getType === eventType) {
                return subscription;
            }
        }

        return null;
    }

    private incrementId() {
        this.id += 1;
    }
}

export default EventBusService.getEventBusService();