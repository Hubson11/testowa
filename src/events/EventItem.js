import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const EventItem = (props) => {
  return (
    <Container>
    <Item>
      <ItemCont>
        <strong>{props.name}</strong>
      </ItemCont>
      <ItemCont>
        {props.changeNumber(props.place)}
      </ItemCont>
      <ItemCont>
        {props.changeNumber(props.date)}
        <ButtonCont>
        <ItemButton onClick={props.onDeleteClicked.bind(this, props.id)}>Usuń</ItemButton>
        </ButtonCont>
      </ItemCont>
    </Item>
    </Container>
  );
};

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};

const Container = styled.li`
  list-style-type: none;
`

const Item = styled.div`
  margin: 0 auto;
  line-height: 24px;
`

const ItemCont = styled.div`
  width: 33.05%;
  text-align: left;
  display: inline-block;
  position: relative;
  border-right: 1px solid black;
  &:last-of-type{
    border-right: none;
  }
`

const ButtonCont = styled.div`
  position: sticky;
  align-items: center;
  display: inline-block;
  cursor: pointer;
  max-width: 35%;
  min-width: 25%;
  margin-right: auto;
  margin-left: auto;
  position:absolute;
  right: 10%;
  `

const ItemButton = styled.div`
  border: 1px solid black;
  text-align: center;
  `
export default EventItem;
