// NPM import
import React from "react";
import PropTypes from "prop-types";

// Sementic-ui import
import { Card, Image, Segment } from "semantic-ui-react";

const ListResults = (props) => {
  const { repos } = props;
  const infosUsers = repos.items.map((data) => (
    <Card key={data.id}>
      <Image src={data.owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Description>{data.description}</Card.Description>
      </Card.Content>
    </Card>
  ));
  return (
    <Segment>
      <Card.Group className="card-container" itemsPerRow={3}>
        {infosUsers}
      </Card.Group>
    </Segment>
  );
};

ListResults.propTypes = {
  repos: PropTypes.object.isRequired
};

export default ListResults;
