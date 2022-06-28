import * as React from "react";

import "./App.css";
import { SetupContainer } from "./pages/setup";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

const App = () => {
  return <SetupContainer />;
};

export default App;
