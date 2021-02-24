// NPM Import
import React from "react";
import axios from "axios";

// Local Import
import ListResults from "./Components/ListResults";
import InputSearch from "./Components/InputSearch";
import MessageInfo from "./Components/MessageInfo";

// Data import
import reposData from "./data";

// Style
import "./styles.css";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = {
    repos: reposData,
    inputValue: "",
    loading: false,
    counter: -1,
    message: null
  };

  // axios data request
  doSearch = () => {
    this.setState({ loading: true });
    const { inputValue } = this.state;
    axios
      .get(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then((response) => {
        // handle success
        this.setState({
          repos: response.data,
          counter: response.data.items.length
        });
      })
      .catch((error) => {
        // handle error
        console.log("isNotOk", error);
      })
      .then(() => {
        // always executed
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  // Update state of input value
  changeInputValue = (newInputValue) => {
    this.setState({ inputValue: newInputValue });
  };

  render() {
    const { inputValue, loading, counter } = this.state;

    // InputSearch's props
    const inputSearchProps = {
      inputValue: inputValue,
      changeInputValue: this.changeInputValue,
      doSearch: this.doSearch,
      loading: loading
    };

    return (
      <div className="app">
        <InputSearch {...inputSearchProps} />
        <MessageInfo counter={counter} />
        <ListResults
          classname="list__result-component"
          repos={this.state.repos}
        />
      </div>
    );
  }
}

export default App;
