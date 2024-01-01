import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";
import Snippets from "./Snippets";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="snippets" element={<Snippets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
