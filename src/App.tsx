import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ComponentsPage from "./pages/ComponentsPage";
import AvatarPage from "./pages/documents/AvatarPage";
import AlertPage from "./pages/documents/AlertPage";
import BadgePage from "./pages/documents/BadgePage";

function App() {
  return (
    <div className="max-h-screen">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/badge" element={<BadgePage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
