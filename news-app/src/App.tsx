import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNewsHeadlines from "./components/TopNewsHeadlines";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div className="App">
       <h2>Top News Headlines</h2>
     <TopNewsHeadlines />
    
     <SearchBar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/heading" element={<Heading />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;