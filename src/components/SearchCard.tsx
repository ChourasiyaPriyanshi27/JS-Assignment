import React from "react";
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

class SearchCard extends React.Component<AppProps, AppState> {
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
    this.setState({
      author: author,
      title: title,
      description: description,
      urlToImage: urlToImage,
      content: content,
    });
  }
  render() {
    return (
      <>
        <CommonCard author={this.state.author}
        title={this.state.title}
        description={this.state.description}
        urlToImage={this.state.urlToImage}
        content={this.state.content} />
      </>
    );
  }
}
export default SearchCard;
