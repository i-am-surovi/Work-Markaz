import "./App.css";
import { createTheme, MantineProvider, Slider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    colors: {
      white: [
        "#ffffff",
        "#efefef",
        "#dcdcdc",
        "#bdbdbd",
        "#989898",
        "#7c7c7c",
        "#656565",
        "#525252",
        "#464646",
        "#3d3d3d",
        "#292929",
      ],

      "azure-radiance": [
        "#eef8ff",
        "#daefff",
        "#bde3ff",
        "#8fd3ff",
        "#5ab8ff",
        "#3499fd",
        "#1877f2",
        "#1664df",
        "#1950b4",
        "#1a468e",
        "#152c56",
      ],
    },
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
