import React from "react";
import { Box, Stack, Link } from "@mui/material";
import { Header } from "./components/Header";
import { Title } from "./components/title";
import { Charact } from "./components/Charact";
import { Function } from "./components/Function";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import inn1 from "../../../images/inn1.jpg";
import rest1 from "../../../images/rest1.jpg";
import gerWeb from "../../../images/gerWeb.jpg";

import { CharactDataType } from "./components/Charact";
import { FunctionDataType } from "./components/Function";

import b1 from "../../../images/bannar11.jpg";
import b2 from "../../../images/bannar22.jpg";
import b3 from "../../../images/bannar33.jpg";

import {
  title1Inn,
  title2Inn,
  CharactDataForInn,
  functionDataForInn,
  title1Rest,
  title2Rest,
  CharactDataForRest,
  functionDataForRest,
  title1GerWeb,
  title2GerWeb,
  CharactDataForGerWeb,
  functionDataForGerWeb,
} from "../../content";

type ProductContentProps = {
  title1: string;
  title2: string;
  titlePic: string;
  headerPic: string;
  charactDataArray: CharactDataType[];
  functionDataArray: FunctionDataType[];
};

export const ProductContent = ({
  title1,
  title2,
  titlePic,
  headerPic,
  charactDataArray,
  functionDataArray,
}: ProductContentProps) => {
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
        <Header headerPic={headerPic} />
        <Title title1={title1} title2={title2} titlePic={titlePic} />
        <Charact charactDataArray={charactDataArray} />
        <Function functionDataArray={functionDataArray} />
      </Stack>
    </Box>
  );
};

export const Web = () => {
  return (
    <ProductContent
      title1={title1Inn}
      title2={title2Inn}
      titlePic={inn1}
      headerPic={b2}
      charactDataArray={CharactDataForInn}
      functionDataArray={functionDataForInn}
    />
  );
};

export const Rest = () => {
  return (
    <ProductContent
      title1={title1Rest}
      title2={title2Rest}
      titlePic={rest1}
      headerPic={b3}
      charactDataArray={CharactDataForRest}
      functionDataArray={functionDataForRest}
    />
  );
};

export const GerWeb = () => {
  return (
    <ProductContent
      title1={title1GerWeb}
      title2={title2GerWeb}
      titlePic={gerWeb}
      headerPic={b1}
      charactDataArray={CharactDataForGerWeb}
      functionDataArray={functionDataForGerWeb}
    />
  );
};
