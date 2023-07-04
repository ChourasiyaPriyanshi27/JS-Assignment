// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SearchBar from "./components/SearchBar";
// import Article from "./components/Article";
// import ArticleCard from "./components/ArticleCard";
// import SearchCard from "./components/SearchCard";

// function App() {
//   return (
//     <div className="App">
//       <h2>Top News Headlines</h2>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Article />
//                 <SearchBar />
//               </>
//             }
//           />
//           <Route path="/article/:id" element={<ArticleCard index={0} />} />
//           <Route path="/search/:id" element={<SearchCard />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
import "./App.css";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import SearchBar from "./components/SearchBar";
import ArticleCard from "./components/ArticleCard";
import Article from "./components/Article";
import SearchCard from "./components/SearchCard";

function App() {
  return (
    <div className="App">
      <h2>Top News Headlines</h2>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <>
              <Article/>
              <SearchBar />
            </>
          </Route>
          <Route path="/article" component={ArticleCard} />
          <Route path="/search" component={SearchCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;