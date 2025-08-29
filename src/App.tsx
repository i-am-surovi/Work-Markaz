import "./App.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindJobsPage from "./Pages/FindJobsPage";
import FindTalentPage from "./Pages/FindTalentPage";
import SignUpPage from "./Pages/SignUpPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import JobDescPage from "./Pages/JobDescPAge";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";

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
    fontFamily: "poppins, sans-serif",
    focusRing: "never",
    primaryColor: "azure-radiance",
    primaryShade: 6,
  });

  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size="xs" mx="md" />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/find-jobs" element={<FindJobsPage />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/posted-job" element={<PostedJobPage/>} />
            <Route path="/find-talent" element={<FindTalentPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
