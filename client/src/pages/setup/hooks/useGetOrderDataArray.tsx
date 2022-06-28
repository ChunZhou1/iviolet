import { orderDataProps } from "api";

const numberPerPage = 10;
var numMaking = 0;
var numReadyPick = 0;

export const useGetOrderDataArray = (
  orderDataArray: orderDataProps[],
  orderStatus: string,
  autoRefresh: boolean,
) => {
  if (!autoRefresh) return orderDataArray.slice(0);

  let orderDataArrayRtn: orderDataProps[];

  let page = orderStatus === "beginMake" ? numMaking : numReadyPick;

  if (orderDataArray.length >= page * numberPerPage + 1) {
    orderDataArrayRtn = orderDataArray.slice(page * numberPerPage);
    if (orderStatus === "beginMake") numMaking++;
    else {
      numReadyPick++;
    }
  } else {
    if (orderStatus === "beginMake") numMaking = 0;
    else {
      numReadyPick = 0;
    }
    orderDataArrayRtn = orderDataArray.slice(0);
  }

  return orderDataArrayRtn;
};
