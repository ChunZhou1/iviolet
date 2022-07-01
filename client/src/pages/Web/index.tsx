import React from "react";
import { Box, Stack, Link } from "@mui/material";
import { Header } from "./components/Header";
import { Title } from "./components/title";
import { Charact } from "./components/Charact";
import { Function } from "./components/Function";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import inn1 from "../../../images/inn1.jpg";
const title1Inn = "专业化的旅店(inn)解决方案。满足您各种定制化的需求";
const title2Inn =
  "采用彻底的底层开发技术，相比于业界使用的现成模板开发，真正满足您各种高定制化的需求，如定制化的促销方案，各种付款方式";

export const Web = () => {
  const navigate = useNavigate();
  return (
    <Box style={{ position: "relative" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ position: "fixed", left: "1%", top: "65%" }}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: "60px" }} />
        <Link
          variant="h4"
          sx={{ fontWeight: 700 }}
          color={"0345fc"}
          underline="none"
          href="##"
          onClick={() => navigate("/")}
        >
          返回
        </Link>
      </Stack>
      <Stack
        direction="column"
        spacing={12}
        sx={{ backgroundColor: "#dae4f5" }}
      >
        <Header />
        <Title title1={title1Inn} title2={title2Inn} titlePic={inn1} />
        <Charact />
        <Function />
      </Stack>
    </Box>
  );
};
