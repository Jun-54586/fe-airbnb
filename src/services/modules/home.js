import ljRequest from "../request";


export function getHomeGoodPriceData() {
  return ljRequest.get({
    url: "home/goodprice"
  })
}