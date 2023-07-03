import React from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import ArticleCard from "./ArticleCard"; // Import the ArticleCard component

class Article extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      headList: [],
      isLoading: true,
      searchText: "",
      text: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=fd5cfcb491ef4fb5a9a335fa8674627e",
        {
          headers: {
            Accept: "application/json", 
            Authorization: "Bearer fd5cfcb491ef4fb5a9a335fa8674627e",
          },
        }
      )
      .then((res) => {
        this.setState({ headList: res.data.articles });
      });
  }

  render() {
    const { headList }:any = this.state;
    return (
      <div>
        <ul>
          <Marquee>
            {headList.map((auth : any, index:any) => (
              <Row className="justify-content-md-center" key={index}>
                <div>
                  <br />
                  <Card className="text-center" style={{ width: "18rem" }}>
                    <Link to={`/article/${index}`}>
                      <Card.Header>
                        Top News: {auth.source.name}
                      </Card.Header>
                    </Link>
                    <Card.Img
                      variant="top"
                      src={auth.urlToImage}
                      style={{ width: "18rem", height: "10rem" }}
                    />
                  </Card>
                </div>
              </Row>
            ))}
          </Marquee>
        </ul>
        {/* {headList.map((auth:any, index:any) => (
          <ArticleCard key={index} index={index} />
        ))} */}
      </div>
    );
  }
}

export default Article;
