import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ManageItems from "./Components/Inventory/ManageItems";
import ViewItems from "./Components/Inventory/ViewItems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="/viewItems" element={<ViewItems />} />
      </Routes>
    </Router>
  );
}

export default App;
