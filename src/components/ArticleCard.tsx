import React from "react";
import { Card } from "react-bootstrap";
import CommonCard from "../common/Card";

interface AppProps {
  location: any;
}

interface AppState {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  content: string;
}

class ArticleCard extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      author: "",
      title: "",
      description: "",
      urlToImage: "",
      content: "",
    };
  }

  componentDidMount(): void {
    const { author, title, description, urlToImage, content } =
      this.props.location.state;

    //Combine setSTate
    this.setState({ author: author });
    this.setState({ title: title });
    this.setState({ description: description });
    this.setState({ urlToImage: urlToImage });
    this.setState({ content: content });
  }
  render() {
    return (
      <>
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
                <Card.Title>
                  <h3>
                    Author Name:
                    {this.state.author !== null
                      ? this.state.author
                      : "Anonymous"}
                  </h3>
                </Card.Title>
                <Card.Text>
                  <strong>Title:</strong>
                  {this.state.title}
                </Card.Text>
                <Card.Img
                  variant="top"
                  src={this.state.urlToImage}
                  style={{ width: "18rem", height: "10rem" }}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ marginTop: "18px" }}>
          <Card>
            <strong>Description:</strong>
            {this.state.description}
          </Card>
          <br />
          <Card style={{ width: "700px", marginLeft: "455px" }}>
            <strong>Content:</strong>
            {this.state.content}
          </Card>
        </div>
      </>
    );
  }
}

export default ArticleCard;
