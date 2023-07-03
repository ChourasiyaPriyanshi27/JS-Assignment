import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
interface ArticleCardProps {
  index: number;
}
class SearchCard extends React.Component {
  constructor(props: ArticleCardProps) {
    super(props);
    this.state = {
      article: [],
    };
  }
  componentDidMount() {
    const { index }: any = this.props;
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
      .then((res) => {
        const { articles } = res.data;

        if (articles && articles.length > index) {
          this.setState({ article: articles[index] });
        }
      });
  }
  render() {
    const { article }: any = this.state;

    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "380px",
              height: "250px",
              boxShadow: "1px 2px 9px #F4AAB9",
            }}
          >
            <Card.Header>
              <h2>
                {" "}
                Author: {article.author !== null ? article.author : "Anonymous"}
              </h2>
            </Card.Header>
            <Card.Title>Title: {article.title}</Card.Title>
            <Card.Img
              variant="top"
              src={article.urlToImage}
              style={{ width: "18rem", height: "10rem" }}
            ></Card.Img>
            <Card>Description:{article.description}</Card>
          </div>
        </div>
      </>
    );
  }
}

export default SearchCard;
