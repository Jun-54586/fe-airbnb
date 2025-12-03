import ljRequest from "../request";


export function getHomeGoodPriceData() {
  return ljRequest.get({
    url: "home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return ljRequest.get({
    url: "home/highscore"
  })
}

export function getHomeDiscountData() {
  return ljRequest.get({
    url: "home/discount"
  })
}

export function getHomeHotRecommendData() {
  return ljRequest.get({
    url: "home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return ljRequest.get({
    url: "home/longfor"
  })
}

export function getHomePlusData() {
  return ljRequest.get({
    url: "home/plus"
  })
}