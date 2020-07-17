import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

class Result extends Component {
  constructor() {
    super();

    this.state = {
      repos: [],
      userInfos: {}
    };
  }

  componentDidMount = async () => {
    const { login, avatar_url } = this.props.history.location.state.data;
    const response = await api.get(`/users/${login}/repos`);

    this.setState({
      repos: response.data,
      userInfos: this.props.history.location.state.data
    });
  };

  render() {
    console.log(this.props.history);
    const { repos, userInfos } = this.state;
    return (
      <main>
        {repos.map((repo, index) => {
          return <div key={`repo_${index + 1}`}>{repo}</div>;
        })}
        {/*<Link to="/">VA PARA HOME --> REACT ROUTER DOM</Link>
      <a href="/">VA PARA HOME ---> NORMAL</a>*/}
      </main>
    );
  }
}

export default Result;
