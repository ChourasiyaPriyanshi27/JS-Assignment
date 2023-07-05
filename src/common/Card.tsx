import React from "react";
import { Card } from "react-bootstrap";
import { styled } from "styled-components";

const Wrapper = styled.section`
  background: lightyellow;
`;
interface CardProps {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  content: string;
}
class CommonCard extends React.Component<CardProps> {
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

  render() {
    const { author, title, urlToImage, description, content }: any = this.props;
    return (
      <>
        <Wrapper>
          <div className="pdiv">
            <div className="cdiv">
              <Card>
                <Card.Body>
                  <p>
                    <strong>Author Name:</strong>
                    {author !== null ? author : "Anonymous"}
                  </p>
                  <Card.Text>
                    <strong>Title:</strong>
                    {title}
                  </Card.Text>
                  <Card.Img
                    variant="top"
                    src={urlToImage}
                    style={{ width: "18rem", height: "10rem" }}
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
          <div>
            <p>
              <strong>Description:</strong>
              {description}
            </p>
            <p>
              <strong>Content:</strong>
              {content !== null ? content : "There is no content"}
            </p>
          </div>
        </Wrapper>
      </>
    );
  }
}
export default CommonCard;
