import React from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";

class TopNewsHeadlines extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      headList: [],
      isLoading: true,
      searchText: "",
      text: [],
    };
  }

  componentDidMount(): void {
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
    const { headList }: any = this.state;
    return (
      <div>
        {
          <ul>
            <Marquee>
              {headList.map((auth: any, index: any) => {
                return (
                  <Row className="justify-content-md-center">
                    <div key={index}>
                      <br />
                      <Card className="text-center" style={{ width: "18rem" }}>
                      <Card.Header>
                          Top News: {auth.source.name}
                        </Card.Header>
                        <Link to="/article" ></Link>
                        <Card.Img
                          variant="top"
                          src={auth.urlToImage}
                          style={{ width: "18rem", height: "10rem" }}
                        />
                      </Card>
                    </div>
                  </Row>
                );
              })}
            </Marquee>
          </ul>
        }
      </div>
    );
  }
}

export default TopNewsHeadlines;
