import React from 'react';

const Repository = ({ match }) => (
  <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>
);

export default Repository;
