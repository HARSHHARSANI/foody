import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState(null);
  return (
    <div>
      <Header setFilteredData={setFilteredData} />
      <Hero filteredData={filteredData} />
    </div>
  );
}

export default App;
