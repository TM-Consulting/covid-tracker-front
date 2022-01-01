interface StatsState {
  data: DoseData | null;
  error: boolean;
}

interface DoseData {
  doses: Dose[] | null;
  cibledPeople: number;
}

interface Dose {
  title: string;
  amt: number;
}

export { StatsState, DoseData, Dose };
