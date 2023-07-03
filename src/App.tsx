import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNewsHeadlines from "./components/TopNewsHeadlines";
import SearchBar from "./components/SearchBar";
import Article from "./components/Article";
import ArticleCard from "./components/ArticleCard";
import SearchCard from "./components/SearchCard";

function App() {
  return (
    <div className="App">
      <h2>Top News Headlines</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Article/><SearchBar /></>} />
          <Route path="/article/:index" element={<ArticleCard index={0} />} />
          <Route path="/searchcard/:index" element={<SearchCard index={0} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;