import { RobotType, Robot } from './Robot';

export class KaraokeRobot extends Robot {
    constructor(id: string) {
        super(id, RobotType.Karaoke);
    }
}
