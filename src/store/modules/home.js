import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeDataAction = createAsyncThunk( "fetchdata", async (payload, { dispatch }) => {
    // 使用 Promise.all 并行执行多个请求
    const [goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo] = await Promise.all([
      getHomeGoodPriceData(),
      getHomeHighScoreData(),
      getHomeDiscountData(),
      getHomeHotRecommendData(),
      getHomeLongforData(),
      getHomePlusData()
    ]);
    
    // 分别 dispatch 结果
    dispatch(changeGoodPriceInfoAction(goodPriceInfo));
    dispatch(changeHighScoreInfoAction(highScoreInfo));
    dispatch(changeDiscountInfoAction(discountInfo));
    dispatch(changeRecommendInfoAction(recommendInfo));
    dispatch(changeLongforInfoAction(longforInfo));
    dispatch(changePlusInfoAction(plusInfo))
    
    // 返回所有数据，可以在 extraReducers 中使用
    return { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo };
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
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
    },
    changeLongforInfoAction(state, { playload }) {
      state.longforInfo = playload
    },
    changePlusInfoAction(state, { playload }) {
      state.plusInfo = playload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        state.goodPriceInfo = payload.goodPriceInfo
        state.highScoreInfo = payload.highScoreInfo
        state.discountInfo = payload.discountInfo
        state.recommendInfo = payload.recommendInfo
        state.longforInfo = payload.longforInfo
        state.plusInfo = payload.plusInfo
      })
  }
})

export const {
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer