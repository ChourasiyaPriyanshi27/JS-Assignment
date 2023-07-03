import React from "react";
import axios from "axios";
import { Nav, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Article {
  title: string;
  author: string;
  urlToImage: string;
}
interface MyState {
  isLoading: boolean;
  articles: Article[];
  filteredData: Article[];
  searchTerm: string;
}
class SearchBar extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
      articles: [],
      filteredData: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=69f8347f69d8489dbad11bbfdc706156",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer 69f8347f69d8489dbad11bbfdc706156",
          },
        }
      )
      .then((response) => {
        const articles = response.data.articles;
        this.setState({ articles, filteredData: articles, isLoading: false });
      })
      .catch((error) => {
        console.error("Error Fetching API:", error);
      });
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm }, () => {
      this.filterData();
    });
  };

  filterData = () => {
    const { searchTerm, articles } = this.state;
    const filteredData = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredData });
  };

  render() {
    const { searchTerm, isLoading, filteredData }: any = this.state;

    return (
      <>
        <form method="get">
          <div className="nav">
            <Nav>
              <h3 className="p alignleft">Search Bar</h3>
              <button type="submit" className="p alignright">
                Search
              </button>
              <input
                type="text"
                className="p alignright"
                value={searchTerm}
                onChange={this.handleSearch}
                placeholder="Search by title"
              />
            </Nav>
          </div>
        </form>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            <div className="row">
              {filteredData.map((article: Article, index: number) => (
                <div key={index} style={{ float: "right", width: "18rem" }}>
                  <Card className="text-center" style={{ width: "18rem" }}>
                    <Card.Header>
                      Author:{" "}
                      {article.author !== null ? article.author : "Anonymous"}
                    </Card.Header>
                    <Card.Title>Title: {article.title}</Card.Title>
                    <Link to={`/search/${index}`}>
                      <Card.Img
                        variant="top"
                        src={article.urlToImage}
                        style={{ width: "18rem", height: "10rem" }}
                      ></Card.Img>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </ul>
        )}
      </>
    );
  }
}
export default SearchBar;
