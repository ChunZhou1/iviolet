import { useState } from "react";
import { sendOrderDataFromDisplayValue, clearOrderData } from "../../../api";

export const useInputCotainer = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [msg, setMsg] = useState("");

  const callBackForAddress = (address: string) => {
    setDisplayValue(address + " ");
    setMsg("");
  };

  const callBackForNumber = (number: string) => {
    if (displayValue !== "") setDisplayValue(displayValue + number);
    setMsg("");
  };

  const callBackForProcess = (process: string) => {
    setMsg("");
    processSwitch(process, displayValue, setDisplayValue, setMsg);
  };

  return {
    displayValue,
    msg,
    callBackForAddress,
    callBackForNumber,
    callBackForProcess,
  };
};

const processSwitch = async (
  process: string,
  displayValue?: string,
  setDisplayValue?: React.Dispatch<React.SetStateAction<string>>,
  setMsg?: React.Dispatch<React.SetStateAction<string>>
) => {
  let data = { status: "fail" };
  switch (process) {
    case "重新输入":
      if (setDisplayValue) setDisplayValue("");
      break;

    case "开始制作":
      if (displayValue && displayValue !== "")
        data = await sendOrderDataFromDisplayValue(displayValue, "beginMake");
      if (data.status === "success" && setMsg) setMsg("处理成功");
      break;

    case "制作完毕":
      if (displayValue && displayValue !== "")
        data = await sendOrderDataFromDisplayValue(
          displayValue,
          "readyForPick"
        );
      if (data.status === "success" && setMsg) setMsg("处理成功");
      break;

    case "取货完毕":
      if (displayValue && displayValue !== "")
        data = await sendOrderDataFromDisplayValue(
          displayValue,
          "completePick"
        );
      if (data.status === "success" && setMsg) setMsg("处理成功");
      break;

    case "全部清除":
      data = await clearOrderData();
      if (data.status === "success" && setMsg) setMsg("处理成功");
      break;

    default:
  }
};
