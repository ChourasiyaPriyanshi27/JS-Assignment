import React from "react";
import Marquee from "react-fast-marquee";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchArticles from "../redux/action/actions";

class Article extends React.Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchArticles();
  }

  render() {
    const { articles, isLoading, error }: any = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error:{error}</p>;
    }
    return (
      <div>
        <ul>
          <Marquee>
            {articles?.articles?.map((auth: any, index: any) => {
              return (
                <Row className="justify-content-md-center" key={index}>
                  <div>
                    <br />
                    <Card className="text-center" style={{ width: "18rem" }}>
                      <Link to={{ pathname: "/article", state: auth }}>
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
              );
            })}
          </Marquee>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles.articles,
    isLoading: state.isLoading,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchArticles }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
