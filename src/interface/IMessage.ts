enum Level {
    Debug,
    Info,
    Warn,
    Error
}

interface Message {
    level: Level;
    message: string;
    timestamp: Date;
}
