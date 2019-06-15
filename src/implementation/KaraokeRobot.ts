import { Robot } from './Robot';
import { RobotType, IRobot } from '../interface/IRobot';

export class KaraokeRobot extends Robot implements IRobot {
    constructor(id: string) {
        super(id, RobotType.Karaoke);
    }
}
