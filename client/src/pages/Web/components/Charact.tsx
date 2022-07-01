import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { pink } from "@mui/material/colors";
import { useIsMobile } from "../../../hooks/useIsMobile";

const CharactData = [
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

export const Charact = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={5}>
      <Typography variant="h2" sx={{ color: "#0345fc", fontWeight: 700 }}>
        主要特点
      </Typography>
      <Grid container>
        {CharactData.map((item) => (
          <CharactItem
            key={item.title}
            icon={item.icon}
            content={item.content}
            title={item.title}
          />
        ))}
      </Grid>
    </Stack>
  );
};

type CharactItemProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
};
const CharactItem = ({ icon, title, content }: CharactItemProps) => {
  const isMobile = useIsMobile();
  return (
    <Grid item sm={12} md={5.5} mt={10}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{ marginLeft: isMobile ? "0%" : "15%" }}
      >
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          {icon}
          <Stack direction="column" alignItems="flex-start" spacing={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, lineHeight: "56px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 400, lineHeight: "46px" }}
            >
              {content}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};
