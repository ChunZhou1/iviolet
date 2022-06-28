import React from "react";
import { Stack, Grid, useTheme } from "@mui/material";
import { EditContent } from "./EditContent";
import { orderDataProps } from "../../../api";
import { useEditCotainer } from "../hooks/useEditCotainer";

type EditContainerProps = {
  display?: boolean;
  data: orderDataProps[] | [];
};

export const EditContainer = ({ display, data }: EditContainerProps) => {
  const { callBackFun } = useEditCotainer();
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        height: "1200px",
        backgroundColor: display ? theme.palette.primary.main : "white",
      }}
    >
      <Grid md={6} item>
        <Stack direction="column" alignItems="center">
          <EditContent
            orderDataArray={data}
            orderStatus={"beginMake"}
            autoRefresh={display ? true : false}
            callBackFun={callBackFun}
          />
        </Stack>
      </Grid>
      <Grid md={6} item>
        <Stack direction="column" alignItems="center">
          <EditContent
            orderDataArray={data}
            orderStatus={"readyForPick"}
            autoRefresh={display ? true : false}
            callBackFun={callBackFun}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
