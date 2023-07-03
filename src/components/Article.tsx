import React from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";

class Article extends React.Component {
  constructor(props: any) {
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
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=69f8347f69d8489dbad11bbfdc706156",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer 69f8347f69d8489dbad11bbfdc706156",
          },
        }
      )
      .then((res) => {
        this.setState({ headList: res.data.articles });
      });
  }

  render() {
    const { headList }: any = this.state;
    return (
      <div>
        <ul>
          <Marquee>
            {headList.map((auth: any, index: any) => (
              <Row className="justify-content-md-center" key={index}>
                <div>
                  <br />
                  <Card className="text-center" style={{ width: "18rem" }}>
                    <Link to={`/article/${index}`}>
                      <Card.Header>Top News: {auth.source.name}</Card.Header>
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
      </div>
    );
  }
}

export default Article;
