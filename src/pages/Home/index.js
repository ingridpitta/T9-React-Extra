import React, { Component } from "react";
import BarraDePesquisa from "../../BarraDePesquisa";
import api from "../../api";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      userData: {},
      erro: ""
    };
  }

  getInputValue = e => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  getUser = async () => {
    const user = this.state.inputValue;
    if (user) {
      await api
        .get(`/users/${user}`)
        .then(res => {
          this.setState({
            userData: res.data,
            erro: "",
            inputValue: ""
          });

          return this.props.history.push({
            pathname: '/result',
            state: {data: res.data}
          });
        })
        .catch(erro =>
          this.setState({ erro: "Usuario nao existe", inputValue: "" })
        );

      // try {
      //   const response = await api.get(`/users/${user}`);
      //   this.setState({ userData: response.data });
      // } catch (e) {
      //   console.log("Usuario nao existe");
      // }
    } else {
      this.setState({ erro: "Input vazio!!!" });
    }
  };

  render() {
    const { inputValue, userData, erro } = this.state;
    // console.log(this.props.history);
    return (
      <main>
        <h1>Github Search</h1>
        <BarraDePesquisa
          value={inputValue}
          onChange={this.getInputValue}
          onClick={this.getUser}
        />
        {erro && <h3>{erro}</h3>}
        {/*{this.state.erro && <h3>{this.state.erro}</h3>}*/}
      </main>
    );
  }
}

export default Home;
