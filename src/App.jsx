import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import Analytics from "./pages/Analytics";
import Uploads from "./pages/Uploads";
import Map from "./pages/Map";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "This is the home page";
        break;
      case "/Profile":
        title = "Profile";
        metaDescription = "This is the Profile page";
        break;
      case "/Calendar":
        title = "Calendar";
        metaDescription = "This is the Calendar page";
        break;
      case "/Analytics":
        title = "Analytics";
        metaDescription = "This is the Analytics page";
        break;
      case "/Uploads":
        title = "Uploads";
        metaDescription = "This is the Uploads page";
        break;
      case "/Map":
        title = "Map";
        metaDescription = "This is the Map page";
        break;
      case "/Settings":
        title = "Settings";
        metaDescription = "This is the Settings page";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Uploads" element={<Uploads />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
