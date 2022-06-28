import { orderDataProps } from "api";
import { useGetOrderDataArray } from "./useGetOrderDataArray";

export const useEditContent = (
  orderStatus: string,
  orderDataArraySrc: orderDataProps[],
  autoRefresh: boolean,
  callBackFun: (orderData: orderDataProps, orderStatus: string) => void,
) => {
  const title = getTitle(orderStatus);
  const OrderDataArrayOri = getOrderDataArray(orderDataArraySrc, orderStatus);
  const BtnTxt = getBtnTxt(orderStatus);
  const displayBtn = getDisplayBtn(autoRefresh);

  //for test
  const OrderDataArray = useGetOrderDataArray(
    OrderDataArrayOri,
    orderStatus,
    autoRefresh,
  );

  const onClick = (orderDataInput: orderDataProps) => {
    callBackFun(orderDataInput, orderStatus);
  };

  return { title, OrderDataArray, BtnTxt, displayBtn, onClick };
};

const getTitle = (orderStatus: string) => {
  switch (orderStatus) {
    case "beginMake":
      return "正在制作 Making";

    case "readyForPick":
      return "制作完毕 Ready for pick up";

    default:
      break;
  }
};

const getOrderDataArray = (
  orderDataArray: orderDataProps[],
  orderStatus: string,
) => {
  return orderDataArray.filter((item) => item.orderStatus === orderStatus);
};

const getBtnTxt = (orderStatus: string) => {
  switch (orderStatus) {
    case "beginMake":
      return "制作完毕";

    case "readyForPick":
      return "取货完毕";

    default:
      break;
  }
};

const getDisplayBtn = (autoRefresh: boolean) => {
  return autoRefresh ? false : true;
};
