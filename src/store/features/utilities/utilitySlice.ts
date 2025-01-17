/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { industryLocationListService, industryTypeService } from "./auth";

interface IndustryState {
  location: [];
  list: [];
  loading: boolean;
  error: string | null;
}

const initialState: IndustryState = {
  list: [],
  loading: false,
  error: null,
  location: [],
};

// =============== Thunk: INDUSTRY TYPE  ===============
export const industryType = createAsyncThunk(
  "utility/industryType",
  async () => {
    try {
      const response = await industryTypeService();
      console.log("data", response);
      const result = response.data.map((f: any) => ({
        ...f,
        label: f.industry,
        value: f.industry,
      }));
      return result;
    } catch (error: any) {
      return error;
    }
  }
);

// =============== Thunk: INDUSTRY LOCATION  ===============
export const industryLocation = createAsyncThunk(
  "utility/industryLocation",
  async () => {
    try {
      const response = await industryLocationListService();
      // bcs shivam is giving duplicate countries so we are just removing duplicates
      const uniqueArray = response.data.reduce((acc: any[], obj: any) => {
        // Check if the country_name has already been added to the accumulator
        const isDuplicate = acc.some(
          (item) => item.country_name === obj.country_name
        );

        // If not a duplicate, add it to the result
        if (!isDuplicate) {
          acc.push(obj);
        }

        return acc;
      }, []);

      const result = uniqueArray?.map((f: any) => ({
        ...f,
        label: f.country_name,
        value: f.country_name,
      }));
      return result;
    } catch (error: any) {
      return error;
    }
  }
);

const utilitySlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // =============== INDUSTRY TYPES HANDLERS ===============
    builder.addCase(industryType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(industryType.fulfilled, (state, action) => {
      // On success, you might set a success message in Redux or just do nothing:
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(industryType.rejected, (state) => {
      state.loading = false;
      state.error = null;
    });
    // =============== INDUSTRY LOCATION HANDLERS ===============
    builder.addCase(industryLocation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(industryLocation.fulfilled, (state, action) => {
      // We define in which state key we will get data
      state.loading = false;
      state.location = action.payload;
    });
    builder.addCase(industryLocation.rejected, (state) => {
      state.loading = false;
      state.error = null;
    });
  },
});

// export const { logout } = authSlice.actions;
export default utilitySlice;
