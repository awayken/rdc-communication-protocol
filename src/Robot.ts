export enum RobotType {
    Agriculture,
    Constructor,
    Drone,
    Karaoke,
    Vehicle
}

export class Robot {
    id: string;
    type: RobotType;

    constructor(id:string, type: RobotType) {
        this.id = id;
        this.type = type;
    }

    info() {
        return `Robot info: ${this.id} (${this.type})`;
    }
}
