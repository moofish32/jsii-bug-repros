export declare class Helper {
    help(): string;
}
export interface Helpable {
    help: Helper;
}
export declare class ThingNeedsHelp implements Helpable {
    readonly help: Helper;
    constructor();
}
