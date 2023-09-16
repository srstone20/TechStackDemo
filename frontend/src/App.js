import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import View1 from "./pages/view1";
import View2 from "./pages/view2";
import JsonDemo from "./pages/JsonDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="view1" element={<View1 />} />
          <Route path="view2" element={<View2 />} />
          <Route path="jsondemo" element={<JsonDemo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
