import * as React from "react";

import { Tab, Typography, Box } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import { InputCotainer } from "./components/inputContainer";
import { EditContainer } from "./components/EditContainer";

import { useSetupContainer } from "./hooks/useSetupContainer";

export const SetupContainer = () => {
  const { onChangeTab, tabValue, orderDataArray } = useSetupContainer();
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={onChangeTab}>
            <Tab label="Input" value="input" />
            <Tab label="Edit" value={"edit"} />
            <Tab label="Display" value={"display"} />
          </TabList>
        </Box>
        <TabPanel value={"input"}>
          <InputCotainer />
        </TabPanel>
        <TabPanel value={"edit"}>
          <EditContainer data={orderDataArray} />
        </TabPanel>
        <TabPanel value={"display"}>
          <EditContainer display={true} data={orderDataArray} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
