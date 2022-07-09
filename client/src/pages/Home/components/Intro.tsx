import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import logo from "../../../../images/logo.jpg";
import { intro } from "../../../content";

export const Intro = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      sx={{ paddingLeft: "5%", paddingRight: "5%" }}
    >
      <img src={logo} style={{ width: "50%" }} />
      <Stack direction="row" justifyContent="flex-start">
        <Typography variant="h5">{intro}</Typography>
      </Stack>
    </Stack>
  );
};
