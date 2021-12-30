interface ChartsState {
  data: ChartsData[] | null;
  error: boolean;
}

interface ChartsData {
  title: string;
  color: string;
  lineDataKey: string;
  data: any[];
}

export { ChartsState, ChartsData };
