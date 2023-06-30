import React from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
//  import { BrowserRouter, withRouter } from 'react-router-dom';

import { Button, Card, Row } from "react-bootstrap";
// import {withRouter , RouteComponentProps , History} from 'react-router-dom'

// type MyState = {
//   isLoading :boolean,
//   searchText : any
// };

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

  //   handleClick = () => {
  //     this.props.history.push('/navigate');

  //   }
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
        // consolewithRouter.log(res, "...");
        this.setState({ headList: res.data.articles });
      });
  }

  //   onNewsSearch = (event: any) => {
  //     this.setState({ searchText: event.target.value });
  //   };

  render() {
    const { headList }: any = this.state;

    return (
      <div>
        {
          <ul>
            <Marquee>
              {/* {headList.map((auth: any, index: any) => (
                <div key={index}>
                  <p>Top News: {auth.source.name}</p>
                </div>
              ))} */}
              {headList.map((auth: any, index: any) => {
                return (
                  <Row className="justify-content-md-center">
                    <div key={index}>
                      <br />
                      <Card className="text-center" style={{ width: "18rem" }}>
                        <Card.Header>Top News: {auth.source.name}</Card.Header>
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
// export default withRouter(TopNewsHeadlines);
export default TopNewsHeadlines;
