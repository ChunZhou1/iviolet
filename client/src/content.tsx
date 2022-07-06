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

export const title1Rest =
  "针对奶茶，咖啡等快消业，我们提供成熟的电子商务解决方案";
export const title2Rest =
  "针对网站点单，pos机点单，pos机收款，现金收款，出货通知，出货管理，我们提供完善的解决方案";

export const CharactDataForRest = [
  {
    icon: <MilitaryTechIcon color="primary" sx={{ fontSize: "100px" }} />,
    title: "多种化的获客方式",
    content:
      "用户可通过网站点单，现场自助点单，现金点单，多种方式方便用户，提升效率",
  },
  {
    icon: <MilitaryTechIcon color="secondary" sx={{ fontSize: "100px" }} />,
    title: "一体化的管理软件，提升效率，降低人工成本",
    content:
      "用户点单，店员制作，用户通知取货，整个过程全部自动化管理，提高效率",
  },
  {
    icon: <MilitaryTechIcon color="success" sx={{ fontSize: "100px" }} />,
    title: "支持外卖数据导入，所有销售数据一目了然",
    content: "外卖数据和自家销售数据结合，让您对整个销售情况一目了然",
  },
  {
    icon: <MilitaryTechIcon sx={{ fontSize: "100px", color: pink[500] }} />,
    title: "支持从底层开发，深度软件定制",
    content:
      "我们满足您的特殊要求，再也不会出现一大堆功能我不需要，我要的功能却没有",
  },
];

export const functionDataForRest = [
  {
    title: "销售网站",
    content:
      "支持商品展示，支付，支持即时付款和到店付款，支持各种促销和会员功能",
  },

  {
    title: "现场无接触用户自助点单",
    content: "用户通过触摸屏点单，pos机付款，减轻店员工作量提高效率",
  },
  {
    title: "工作流程自动管理",
    content: "用户付款后，店员得到通知，开始制作，制作完毕后，用户即时得到通知",
  },
  {
    title: "强大的客户通知功能",
    content:
      "用户点单后可以通过网站实时了解自己订单进展情况，也可通过店内大屏了解自己订单的状况，提高用户体验，减少用户频繁询问对店家效率影响",
  },
  {
    title: "外卖信息导入，强大的后台管理功能",
    content: "了解不同品种在不同时间的销售情况，今后更可扩展来料管理功能",
  },
];
