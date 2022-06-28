import React from "react";
import { Stack, Grid } from "@mui/material";
import { AddressBtnItem } from "./InputContentSmallContent";
import { NumberBtnItem } from "./InputContentSmallContent";
import { ProcessBtnItem } from "./InputContentSmallContent";

type AddressContentProps = {
  callBackForAddress: (address: string) => void;
};
const AddressContent = ({ callBackForAddress }: AddressContentProps) => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={4}>
      <AddressBtnItem text={"A0"} callBackForAddress={callBackForAddress} />
      <AddressBtnItem text={"熊猫"} callBackForAddress={callBackForAddress} />
      <AddressBtnItem text={"饭团"} callBackForAddress={callBackForAddress} />
      <AddressBtnItem text={"松鼠1"} callBackForAddress={callBackForAddress} />
      <AddressBtnItem text={"WEB"} callBackForAddress={callBackForAddress} />
      <AddressBtnItem text={"FOD"} callBackForAddress={callBackForAddress} />
      <AddressBtnItem text={"FHW"} callBackForAddress={callBackForAddress} />
    </Stack>
  );
};

type NumberContentProps = {
  callBackForNumber: (address: string) => void;
  callBackForProcess: (process: string) => void;
};
const NumberContent = ({
  callBackForNumber,
  callBackForProcess,
}: NumberContentProps) => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={4}>
      <Stack direction="row" justifyContent="flex-start" spacing={2}>
        <NumberBtnItem text={"1"} callBackForNumber={callBackForNumber} />
        <NumberBtnItem text={"2"} callBackForNumber={callBackForNumber} />
        <NumberBtnItem text={"3"} callBackForNumber={callBackForNumber} />
      </Stack>
      <Stack direction="row" justifyContent="flex-start" spacing={2}>
        <NumberBtnItem text={"4"} callBackForNumber={callBackForNumber} />
        <NumberBtnItem text={"5"} callBackForNumber={callBackForNumber} />
        <NumberBtnItem text={"6"} callBackForNumber={callBackForNumber} />
      </Stack>
      <Stack direction="row" justifyContent="flex-start" spacing={2}>
        <NumberBtnItem text={"7"} callBackForNumber={callBackForNumber} />
        <NumberBtnItem text={"8"} callBackForNumber={callBackForNumber} />
        <NumberBtnItem text={"9"} callBackForNumber={callBackForNumber} />
      </Stack>
      <Stack direction="row" justifyContent="flex-start" spacing={2}>
        <NumberBtnItem text={"0"} callBackForNumber={callBackForNumber} />
        <ProcessBtnItem
          text={"重新输入"}
          callBackForProcess={callBackForProcess}
        />
      </Stack>
    </Stack>
  );
};

type ProcessContentProps = {
  callBackForProcess: (process: string) => void;
};

const ProcessContent = ({ callBackForProcess }: ProcessContentProps) => {
  return (
    <Stack direction="column" alignItems="center" spacing={20}>
      <Stack direction="column" alignItems="center" spacing={4}>
        <ProcessBtnItem
          text={"开始制作"}
          callBackForProcess={callBackForProcess}
        />
        <ProcessBtnItem
          text={"制作完毕"}
          callBackForProcess={callBackForProcess}
        />
        <ProcessBtnItem
          text={"取货完毕"}
          callBackForProcess={callBackForProcess}
        />
      </Stack>

      <ProcessBtnItem
        text={"全部清除"}
        callBackForProcess={callBackForProcess}
      />
    </Stack>
  );
};
/////////////////////////////////////////////////////////////////////////
type InputContentProps = {
  callBackForAddress: (address: string) => void;
  callBackForNumber: (number: string) => void;
  callBackForProcess: (process: string) => void;
};

export const InputContent = ({
  callBackForAddress,
  callBackForNumber,
  callBackForProcess,
}: InputContentProps) => {
  return (
    <Grid container justifyContent="center">
      <Grid md={2} item>
        <Stack direction="column" alignItems="center">
          <AddressContent callBackForAddress={callBackForAddress} />
        </Stack>
      </Grid>
      <Grid md={4} item>
        <Stack direction="column" alignItems="center">
          <NumberContent
            callBackForNumber={callBackForNumber}
            callBackForProcess={callBackForProcess}
          />
        </Stack>
      </Grid>

      <Grid md={2} item>
        <Stack direction="column" alignItems="center">
          <ProcessContent callBackForProcess={callBackForProcess} />
        </Stack>
      </Grid>
    </Grid>
  );
};
