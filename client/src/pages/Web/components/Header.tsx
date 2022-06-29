import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

import b2 from "../../../../images/bannar22.jpg";

export const Header = () => {
  return (
    <Stack direction="column" spacing={6} sx={{ width: "100%" }}>
      <img src={b2} />
    </Stack>
  );
};
