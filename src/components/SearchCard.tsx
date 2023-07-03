import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

interface ArticleCardProps {
  index: number;
}

interface ArticleCardState {
  article: any;
}

class SearchCard extends Component<ArticleCardProps, ArticleCardState> {
  constructor(props: ArticleCardProps) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    const { index } = this.props;
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
        const { articles } = res.data;
        if (articles && articles.length > index) {
          this.setState({ article: articles[index] });
        }
      });
  }

  render() {
    const { article } = this.state;
    if (!article) {
      return <div>Loading...</div>;
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '380px', height: '250px', border: '1px solid red' }}>
          <Card>
            <Card.Body>
              <Card.Title>{article.author}</Card.Title>
              <Card.Text>{article.title}</Card.Text>
              
              <Card.Img>{article.urlToImage}</Card.Img>

             
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default SearchCard;
