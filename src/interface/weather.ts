export type WeatherData = any;

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  city: string;
  unit: string;
}
