import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { pink } from "@mui/material/colors";

export const title1Inn = "专业化的旅店(inn)解决方案。满足您各种定制化的需求";
export const title2Inn =
  "采用彻底的底层开发技术，相比于业界使用的现成模板开发，真正满足您各种高定制化的需求，如定制化的促销方案，各种付款方式";

export const CharactDataForInn = [
  {
    icon: <MilitaryTechIcon color="primary" sx={{ fontSize: "100px" }} />,
    title: "在您自己的网站上用户可进行订房操作，不需要向第三方平台付手续费",
    content:
      "个性化的页面提升自己物业的价值，向客户全面推介自己的物业，将用户掌握在你的手里",
  },
  {
    icon: <MilitaryTechIcon color="secondary" sx={{ fontSize: "100px" }} />,
    title: "底层软件自主开发，彻底避免重订房(overBooking)",
    content:
      "可以和第三方channel manage无缝集成，和第三方订房平台同步时间小于三分钟，彻底避免重订房问题",
  },
  {
    icon: <MilitaryTechIcon color="success" sx={{ fontSize: "100px" }} />,
    title: "灵活多变的促销方式，让您的物业发挥出最大的价值",
    content: "支持尾房促销，根据居住时间促销，根据空房率自动促销等多种促销方式",
  },
  {
    icon: <MilitaryTechIcon sx={{ fontSize: "100px", color: pink[500] }} />,
    title: "支持多种付款方式，保护您的利益，减少您的工作量",
    content:
      "可以不需用户进行预授权，自动对用户信用卡进行校验但不扣款；在用户入住三天前进行自动扣款，同时实现免押金入住，极大提升用户体验，",
  },
];

export const functionDataForInn = [
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
