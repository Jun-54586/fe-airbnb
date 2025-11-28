import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeDataAction = createAsyncThunk( "fetchdata", async (payload, { dispatch }) => {
    // 使用 Promise.all 并行执行多个请求
    const [goodPriceInfo, highScoreInfo, discountInfo, recommendInfo] = await Promise.all([
      getHomeGoodPriceData(),
      getHomeHighScoreData(),
      getHomeDiscountData(),
      getHomeHotRecommendData()
    ]);
    
    // 分别 dispatch 结果
    dispatch(changeGoodPriceInfoAction(goodPriceInfo));
    dispatch(changeHighScoreInfoAction(highScoreInfo));
    dispatch(changeDiscountInfoAction(discountInfo));
    dispatch(changeRecommendInfoAction(recommendInfo))
    
    // 返回所有数据，可以在 extraReducers 中使用
    return { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo };
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { playload }) {
      state.goodPriceInfo = playload
    },
    changeHighScoreInfoAction(state, { playload }) {
      state.highScoreInfo = playload
    },
    changeDiscountInfoAction(state, { playload }) {
      state.discountInfo = playload
    },
    changeRecommendInfoAction(state, { playload }) {
      state.recommendInfo = playload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        state.goodPriceInfo = payload.goodPriceInfo
        state.highScoreInfo = payload.highScoreInfo
        state.discountInfo = payload.discountInfo
        state.recommendInfo = payload.recommendInfo
      })
  }
})

export const {
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction
} = homeSlice.actions

export default homeSlice.reducer