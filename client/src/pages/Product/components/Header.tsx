import React from "react";
import { Stack } from "@mui/material";

type HeaderProps = {
  headerPic: string;
};

export const Header = ({ headerPic }: HeaderProps) => {
  return (
    <Stack direction="column" spacing={6} sx={{ width: "100%" }}>
      <img src={headerPic} />
    </Stack>
  );
};
