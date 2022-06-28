import { postRequest, orderDataProps } from "../../../api";

export const useEditCotainer = () => {
  const callBackFun = (orderData: orderDataProps, orderStatus: string) => {
    switch (orderStatus) {
      case "beginMake":
        orderData.orderStatus = "readyForPick";
        break;

      case "readyForPick":
        orderData.orderStatus = "completePick";
        break;

      default:
        break;
    }

    postRequest("/dbget/api/orderData", orderData);
  };
  return { callBackFun };
};
