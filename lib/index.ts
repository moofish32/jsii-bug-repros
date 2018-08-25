
export class Helper {
    public help(): string {
        return 'your welcome for the help';
    }
}

export interface Helpable {
    help: Helper;
}

export class ThingNeedsHelp implements Helpable {

    public readonly help: Helper;

    constructor() {
        this.help = new Helper();
    }
}



