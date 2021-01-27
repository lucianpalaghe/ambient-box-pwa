export enum IAQState {
    HORRIBLE = 0,
    BAD,
    GOOD,
    GREAT,
    UNKNOWN
  }
export enum IAQAccuracy {
    STABILIZING = 0,
    LOW,
    MEDIUM,
    HIGH,
    UNKNOWN
};

export enum BatteryLevel { 
    LOW = 0,
    MEDIUM,
    HIGH,
    CHARGING,
    UNKNOWN
};
export interface SensorData {
    temperature: string;
    humidity: string;
    altitude: string;
    pressure: string;
    iaq: IAQState;
    iaqAccuracy: IAQAccuracy;
    battery: BatteryLevel;
}