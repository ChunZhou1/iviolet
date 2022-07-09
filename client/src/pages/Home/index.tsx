import React from "react";
import { Stack } from "@mui/material";

import { Header } from "./components/Header";
import { Product } from "./components/product";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";

export const Home = () => {
  return (
    <Stack direction="column" spacing={6}>
      <Header />
      <Intro />
      <Product />
      <Contact />
    </Stack>
  );
};
