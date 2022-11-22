export interface KeyValue {
  Key: string;
  Value: number;
}

export interface Stats {
  KeyValues: KeyValue[];
}

export interface RootStatsObject {
  stats: Stats;
}
