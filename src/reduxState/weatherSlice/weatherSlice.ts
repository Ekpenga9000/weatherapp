import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherState, WeatherData } from "../../interface/weather";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  city: "Calgary",
  unit: "metric",
};

export const fetchWeather = createAsyncThunk<
  WeatherData,
  { city: string; unit: string },
  { rejectValue: string }
>("weather/fetchWeather", async ({ city, unit }, { rejectWithValue }) => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
 
    console.log("City", city)
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&exclude=alerts,minutely,hourly,daily&appid=${API_KEY}`
    );
    return response.data;
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      return rejectWithValue(err.response.data.message);
    }
    return rejectWithValue(
      "An error occurred while fetching the weather data."
    );
  }
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    toggleUnit(state) {
      state.unit = state.unit === "metric" ? "imperial" : "metric";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<WeatherData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch weather data.";
      });
  },
});

export const { setCity, toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
