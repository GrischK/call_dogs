import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dogs from "./pages/Dogs/Dogs.jsx";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
