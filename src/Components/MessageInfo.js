// NPM import
import React from "react";
import PropTypes from "prop-types";

// Sementic-ui import
import { Message } from "semantic-ui-react";

const MessageInfo = (props) => {
  const { counter } = props;
  return (
    <>
      {counter > 0 ? (
        <Message color="green">{counter} profils found</Message>
      ) : null}
      {counter === 0 ? (
        <Message color="red">
          {counter} profils found. I wouldn't have written it like that...
        </Message>
      ) : null}
    </>
  );
};

MessageInfo.propTypes = {
  counter: PropTypes.number.isRequired
};

export default MessageInfo;
