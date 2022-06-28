import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { InputContent } from "./InputContent";

import { useInputCotainer } from "../hooks/useInputCotainer";
export const InputCotainer = () => {
  const {
    displayValue,
    callBackForAddress,
    callBackForNumber,
    callBackForProcess,
    msg,
  } = useInputCotainer();
  return (
    <Stack direction="column" alignItems="center" spacing={8}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <TextField
          value={displayValue}
          variant="outlined"
          sx={{ width: "400px" }}
        />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {msg}
        </Typography>
      </Stack>
      <InputContent
        callBackForAddress={callBackForAddress}
        callBackForNumber={callBackForNumber}
        callBackForProcess={callBackForProcess}
      />
    </Stack>
  );
};
