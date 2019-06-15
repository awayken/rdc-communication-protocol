export enum RobotType {
    Agriculture,
    Constructor,
    Drone,
    Karaoke,
    Vehicle
}

export interface IRobot {
    readonly id: string;
    readonly type: RobotType;
    info(): string;
}
