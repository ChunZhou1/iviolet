import React from "react";
import { Button, styled, buttonClasses, Box } from "@mui/material";

type AddressBtnItemProps = {
  text: string;
  callBackForAddress: (address: string) => void;
};

export const AddressBtnItem = ({
  text,
  callBackForAddress,
}: AddressBtnItemProps) => {
  return (
    <Box>
      <AddressBtn variant="outlined" onClick={() => callBackForAddress(text)}>
        {text}
      </AddressBtn>
    </Box>
  );
};

type NumberBtnItemProps = {
  text: string;
  callBackForNumber: (number: string) => void;
};

export const NumberBtnItem = ({
  text,
  callBackForNumber,
}: NumberBtnItemProps) => {
  return (
    <Box>
      <NumberBtn variant="outlined" onClick={() => callBackForNumber(text)}>
        {text}
      </NumberBtn>
    </Box>
  );
};

type ProcessBtnItemProps = {
  text: string;
  callBackForProcess: (process: string) => void;
};

export const ProcessBtnItem = ({
  text,
  callBackForProcess,
}: ProcessBtnItemProps) => {
  return (
    <Box>
      <ProcessBtn variant="contained" onClick={() => callBackForProcess(text)}>
        {text}
      </ProcessBtn>
    </Box>
  );
};

const AddressBtn = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    width: "120px",
  },
}));

const NumberBtn = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    width: "30px",
  },
}));

const ProcessBtn = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    width: "120px",
  },
}));
