import React from "react";
import { searchBarArticles } from "../redux/action/actions";
import { Nav, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
    //@ts-ignore
    this.props.searchBarArticles();
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm }, () => {
      this.filterData();
    });
  };
  filterData = () => {
    const { searchTerm, articles } = this.state;
    console.log("statekjfhf",articles)
   
    const filteredData = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredData });
  };

  render() {
    const { searchTerm, isLoading, searchArticles }: any = this.props;

 
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
              {searchArticles?.map(
                (article: Article, index: number) => (
                  <div
                    key={index}
                   className="searchbar"
                  >
                    <Card >
                      <Card.Header className="searchbarA">
                        Author:{" "}
                        {article.author !== null ? article.author : "Anonymous"}
                      </Card.Header>
                      <p className="searchbart">Title: {article.title}</p>
                      <Link to={{ pathname: "search", state: article }}>
                        <Card.Img
                          variant="top"
                          src={article.urlToImage}
                          style={{ width: "18rem", height: "10rem",marginRight:"50px" }}
                         //className="searchbarI"
                        ></Card.Img>
                      </Link>
                    </Card>
                  </div>
                )
              )}
          
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
 return {
    searchArticles: state.searchArticles?.articles?.articles ,
    isLoading: state.searchArticles?.isLoading,
    error: state.searchArticles?.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ searchBarArticles }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
