import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

interface ArticleCardProps {
  index: number;
}
interface ArticleCardState {
  article: any;
}
class ArticleCard extends Component<ArticleCardProps, ArticleCardState> {
  constructor(props: ArticleCardProps) {
    super(props);
    this.state = {
      article: [],
    };
  }
  componentDidMount() {
    const { index } = this.props;
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
        const { articles } = res.data;

        if (articles && articles.length > index) {
          this.setState({ article: articles[index] });
        }
      });
  }
  render() {
    const { article }: any = this.state;
    if (!article) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "380px",
              height: "300px",
              boxShadow: "1px 2px 9px #F4AAB9",
            }}
          >
            <Card>
              <Card.Body>
                <Card.Title>Title:{article.title}</Card.Title>
                <Card.Text>Description:{article.description}</Card.Text>
                <Card.Img
                  variant="top"
                  src={article.urlToImage}
                  style={{ width: "18rem", height: "10rem" }}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ marginTop: "18px" }}>
          <Card>{article.publishedAt}</Card>
          <Card>{article.content}</Card>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
