import React from "react";
import { Stack } from "@mui/material";

import { Header } from "./components/Header";
import { Product } from "./components/product";
import { Contact } from "./components/Contact";

export const Home = () => {
  return (
    <Stack direction="column" spacing={6}>
      <Header />
      <Product />
      <Contact />
    </Stack>
  );
};
