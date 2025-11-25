import { getHomeGoodPriceData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeDataAtion = createAsyncThunk("fetchdata", async () => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { playload }) {
      state.goodPriceInfo = playload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAtion.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.goodPriceInfo = payload
      })
  }
})

export const {changeGoodPriceInfoAction} = homeSlice.actions

export default homeSlice.reducer