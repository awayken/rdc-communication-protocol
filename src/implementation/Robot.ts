import { RobotType, IRobot } from '../interface/IRobot';

export class Robot implements IRobot {
    readonly id: string;
    readonly type: RobotType;

    constructor(id: string, type: RobotType) {
        this.id = id;
        this.type = type;
    }

    info() {
        return `Robot info: ${this.id} (${this.type})`;
    }
}
