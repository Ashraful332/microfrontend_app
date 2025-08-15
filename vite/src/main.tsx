import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css"
import Moon from "./page/Moon";
import Dyna from "./page/Dyna";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/moon" element={<Moon />} />
      <Route path="/dyna" element={<Dyna />} />
    </Routes>
  </BrowserRouter>,
);

