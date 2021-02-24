// NPM import
import React from "react";
import PropTypes from "prop-types";

// Sementic-ui import
import { Segment, Input, Form } from "semantic-ui-react";

class InputSearch extends React.Component {
  changeHandler = (event) => {
    const { changeInputValue } = this.props;
    const { value } = event.target;
    changeInputValue(value);
  };

  render() {
    const { doSearch, inputValue, loading } = this.props;

    const inputProps = {
      value: inputValue,
      onChange: this.changeHandler,
      className: "input-search-field",
      loading: loading
      // inverted
    };
    return (
      <Form onSubmit={doSearch}>
        <Segment inverted>
          <Form.Field>
            <Input {...inputProps} />
          </Form.Field>
        </Segment>
      </Form>
    );
  }
}

// Component's PropTypes
InputSearch.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default InputSearch;
