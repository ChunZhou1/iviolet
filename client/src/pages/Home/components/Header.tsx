import React, { useMemo } from "react";
import { Stack, Grid, Typography, Box, useTheme } from "@mui/material";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import logo from "../../../../images/logo.jpg";
import b1 from "../../../../images/bannar11.jpg";
import b2 from "../../../../images/bannar22.jpg";
import b3 from "../../../../images/bannar33.jpg";

const picArray = [
  <img src={b1} key={"1"} />,
  <img src={b2} key={"2"} />,
  <img src={b3} key={"3"} />,
];

export const Header = () => {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item md={6}>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ marginLeft: "5%" }}
          >
            <img src={logo} style={{ width: "30%" }} />
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Stack
            direction="column"
            alignItems="flex-end"
            sx={{ marginRight: "5%" }}
          >
            <Typography variant="h4">
              29 Singer Court, Toronto Tel: 4372314578
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Zoom scale={1.4}>{picArray}</Zoom>
    </>
  );
};
