import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

import inn2 from "../../../../images/inn2.jpg";

export type FunctionDataType = {
  title: string;
  content: string;
};

type FunctionProps = {
  functionDataArray: FunctionDataType[];
};

export const Function = ({ functionDataArray }: FunctionProps) => {
  return (
    <Stack direction="column" alignItems="center" spacing={8}>
      <Typography variant="h2" sx={{ color: "#0345fc", fontWeight: 700 }}>
        主要功能
      </Typography>
      <Grid container alignItems="flex-start">
        <Grid item sm={0} md={1}></Grid>
        <Grid item sm={12} md={5}>
          <img src={inn2} style={{ width: "90%" }} />
        </Grid>
        <Grid item sm={12} md={5}>
          {functionDataArray.map((item) => (
            <FunctionItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </Grid>
        <Grid item sm={0} md={1}></Grid>
      </Grid>
    </Stack>
  );
};

type FunctionItemProps = {
  title: string;
  content: string;
};
const FunctionItem = ({ title, content }: FunctionItemProps) => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={3} mb={6}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        {content}
      </Typography>
    </Stack>
  );
};
