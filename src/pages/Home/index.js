import React, { Component } from "react";
import { SearchBar } from "../../components";
import ApiService from "../../api/service";
import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      error: ""
    };
  }

  setUser = e => {
    this.setState({ user: e.target.value });
  };

  searchUser = async () => {
    const { user } = this.state;

    user
      ? await ApiService.getUser(user)
          .then(res =>
            this.props.history.push({
              pathname: "/result",
              state: {
                res
              }
            })
          )
          .catch(error =>
            this.setState({ error: "Nenhum usuário encontrado!", user: "" })
          )
      : this.setState({ error: "Por favor, insira usuário!" });
  };

  render() {
    const { user, error } = this.state;
    return (
      <main className="home--container">
        <h1>Github Search</h1>
        <SearchBar
          type="text"
          value={user}
          classInput="search-input"
          classButton="search-button"
          placeholder="Digite um usuário para consultar seus repositórios"
          changeUser={this.setUser}
          buttonAction={this.searchUser}
        />
        {error && <h3>{error}</h3>}
      </main>
    );
  }
}

export default Home;
