import React, { Component } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { Card} from "react-bootstrap";

// type MyState = {
//   isLoading :boolean,
//   searchText : any
// };

class SearchBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      headList: [],
      sortedData : [],
      isLoading: true,
      searchText: "",
      text: [],
    };
  }
  componentDidMount(): void {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=fd5cfcb491ef4fb5a9a335fa8674627e",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer fd5cfcb491ef4fb5a9a335fa8674627e",
          },
        }
      )
      .then((res) => {
        console.log(res, "searchbar");
        this.setState({ headList: res.data.articles , sortedData:res.data.articles });
      });
  }

 

  onNewsSearch = (event: any) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const { headList, searchText }: any = this.state;

    return (
      <form method="get">
        <div className="nav">
          <Nav>
            <p className="p alignleft">Search Bar</p>
            <Nav.Link className="p alignleft">Heading</Nav.Link>
            <button type="submit" className="p alignright">
              Search
            </button>
            <input
              type="search"
              className="p alignright"
              value={searchText}
              onChange={this.onNewsSearch}
            />
          </Nav>
          {
            <ul>
              {/* {headList.sort((a:any, b:any) => a.itemM > b.itemM ? 1 : -1).map((auth: any, index: any) => (
               <div key={index}>
                  <h3>Author:{auth.author}</h3>
                  <p>Name:{auth.source.name}</p>
                  <p>title:{auth.title}</p>
                </div>
              ))} */}
              {headList.map((auth: any, index: any) => {
                return(
                  <div key={index}>
                    <Card className="text-center" style={{ width: "18rem" }}>
                        <Card.Header>Author:{auth.author}</Card.Header>
                        <Card.Title>Title:{auth.title}</Card.Title>
                        <Card.Img
                          variant="top"
                          src={auth.urlToImage}
                          style={{ width: "18rem", height: "10rem" }}
                        />
                       
                        <Card.Body>
                          {/* <Button
                            variant="primary"
                            style={{ marginRight: "20px" }}
                          >
                            Card Link
                          </Button> */}
                        </Card.Body>
                      </Card> 
                  </div>
                )
              })}
            </ul>
         
          }
        </div>
      </form>
    );
  }
}
export default SearchBar;
