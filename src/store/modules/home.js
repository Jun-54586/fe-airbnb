import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeDataAction = createAsyncThunk( "fetchdata", async (payload, { dispatch }) => {
    // 使用 Promise.all 并行执行多个请求
    const [goodPriceInfo, highScoreInfo] = await Promise.all([
      getHomeGoodPriceData(),
      getHomeHighScoreData()
    ]);
    
    // 分别 dispatch 结果
    dispatch(changeGoodPriceInfoAction(goodPriceInfo));
    dispatch(changeHighScoreInfoAction(highScoreInfo));
    
    // 返回所有数据，可以在 extraReducers 中使用
    return { goodPriceInfo, highScoreInfo };
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { playload }) {
      state.goodPriceInfo = playload
    },
    changeHighScoreInfoAction(state, { playload }) {
      state.highScoreInfo = playload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        state.goodPriceInfo = payload.goodPriceInfo
        state.highScoreInfo = payload.highScoreInfo
      })
  }
})

export const {
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction
} = homeSlice.actions

export default homeSlice.reducer