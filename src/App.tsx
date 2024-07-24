import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import AllCustomers from "./pages/AllCustomers";

import "./App.scss";
import Help from "./pages/Help";
import Income from "./pages/Income";
import Product from "./pages/Product";
import Promote from "./pages/Promote";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapperApp">
        <Sidebar />
        <div className="wrapperPage">
          <header className="">Header</header>
          <main className="">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/customers" element={<AllCustomers />} />              
              <Route path="/product" element={<Product />} />
              <Route path="/income" element={<Income />} />
              <Route path="/promote" element={<Promote />} />
              <Route path="/help" element={<Help />} />              
            </Routes>
          </main>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
