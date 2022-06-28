import { useState } from "react";
import { getRequest, orderDataProps } from "../../../api";

var timer: NodeJS.Timer | null = null;

type TabValue = "input" | "edit" | "display";
export const useSetupContainer = () => {
  const [tabValue, setTableValue] = useState<TabValue>("display");
  const [orderDataArray, setOrderDataArray] = useState<orderDataProps[] | []>(
    [],
  );
  const [TimerInterval, setTimerInterval] = useState(3000);

  const onChangeTab = (event: React.SyntheticEvent, newValue: TabValue) => {
    setTableValue(newValue);
    if (newValue === "edit") setTimerInterval(1000);
    else setTimerInterval(3000);
  };

  if (timer === null) {
    timer = setInterval(async () => {
      const data = await getRequest("/dbget/api/orderData");
      setOrderDataArray(data);
    }, TimerInterval);
  } else {
    clearInterval(timer);
    timer = setInterval(async () => {
      const data = await getRequest("/dbget/api/orderData");
      setOrderDataArray(data);
    }, TimerInterval);
  }

  return { onChangeTab, tabValue, orderDataArray };
};
