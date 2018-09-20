import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const EventFilters = (props) => {
  return <Input type="text" onChange={props.onFilterChange} placeholder="Wyszukaj po nazwie" />
};

EventFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

const Input = styled.input`
  margin: .1rem 0;
  border: 1px solid black;
  padding: .2rem 1rem;
  border-radius: 20px;
`

export default EventFilters;
