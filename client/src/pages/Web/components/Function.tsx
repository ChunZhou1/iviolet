import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

import inn2 from "../../../../images/inn2.jpg";

const functionData = [
  {
    title: "房间和物业展示功能",
    content:
      "物业历史，周围交通，设施，房间各种房型，设施，提供的服务，支持轮番图，视频展示",
  },

  {
    title: "订房功能",
    content:
      "支持信用卡，微信，支付宝等多种付款方式，支持事前付款，订房前三天扣款等多种扣款方式，支持信用卡自动校验，免押金入驻，发生损坏后自动从信用卡扣款，方便管理; 更独家支持pos机和服务器联网运作，使您免交pos机月租费",
  },
  {
    title: "强大的订单管理功能",
    content:
      "当前入住，即将入住清单，调房功能，取消订单扣款功能，手动或自动refund功能",
  },
  {
    title: "强大的促销功能",
    content:
      "支持尾房促销，活动促销，根据居住时间自动给予折扣，根据入住率自动给予折扣，针对贵宾用户给予折扣等多种促销方式",
  },
  {
    title: "强大的同步功能",
    content:
      "支持和airBNB，booking等第三方平台自动同步，同步时间小于三分钟，彻底杜绝OverBooking",
  },
];

export const Function = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={8}>
      <Typography variant="h2" sx={{ color: "#0345fc", fontWeight: 700 }}>
        主要功能
      </Typography>
      <Grid container alignItems="flex-start">
        <Grid item sm={0} md={1}></Grid>
        <Grid item sm={12} md={5}>
          <img src={inn2} style={{ width: "90%" }} />
        </Grid>
        <Grid item sm={12} md={5}>
          {functionData.map((item) => (
            <FunctionItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </Grid>
        <Grid item sm={0} md={1}></Grid>
      </Grid>
    </Stack>
  );
};

type FunctionItemProps = {
  title: string;
  content: string;
};
const FunctionItem = ({ title, content }: FunctionItemProps) => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={3} mb={6}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        {content}
      </Typography>
    </Stack>
  );
};
