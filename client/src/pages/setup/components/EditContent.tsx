import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import { orderDataProps } from "api";
import { useEditContent } from "../hooks/useEditContent";

type EditContentProps = {
  orderDataArray: orderDataProps[];
  orderStatus: string;
  autoRefresh: boolean;
  callBackFun: (orderData: orderDataProps, orderStatus: string) => void;
};

export const EditContent = ({
  orderDataArray,
  orderStatus,
  autoRefresh,
  callBackFun,
}: EditContentProps) => {
  const { title, OrderDataArray, BtnTxt, displayBtn, onClick } = useEditContent(
    orderStatus,
    orderDataArray,
    autoRefresh,
    callBackFun,
  );

  const editContentList = OrderDataArray.map((item) => {
    return (
      <EditContentItem
        key={item.orderNumber + item.address}
        orderData={item}
        btnTxt={BtnTxt ? BtnTxt : ""}
        displayBtn={displayBtn}
        onClick={onClick}
      />
    );
  });
  return (
    <Stack dir="column" alignItems="center" spacing={4}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "400", color: displayBtn ? "black" : "white" }}
      >
        {title}
      </Typography>
      <Stack
        dir="column"
        alignItems={autoRefresh === false ? "flex-end" : "center"}
        spacing={displayBtn ? 4 : 2}
      >
        {editContentList}
      </Stack>
    </Stack>
  );
};

type EditContentItemProps = {
  orderData: orderDataProps;

  btnTxt: string;
  displayBtn: boolean;
  onClick: (orderData: orderDataProps) => void;
};

const EditContentItem = ({
  orderData,

  btnTxt,
  displayBtn,
  onClick,
}: EditContentItemProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={10}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: displayBtn ? "black" : "white" }}
      >
        {orderData.address}
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: displayBtn ? "black" : "white" }}
      >
        {orderData.orderNumber}
      </Typography>
      {displayBtn && (
        <Button variant="contained" onClick={() => onClick(orderData)}>
          {btnTxt}
        </Button>
      )}
    </Stack>
  );
};
