import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllCustomers from "./pages/AllCustomers/AllCustomers";

import "./App.scss";

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
              <Route path="/customers" element={<AllCustomers />} />
            </Routes>
          </main>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
