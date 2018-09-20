import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const EventAdd = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <Form>
        <Item>
          <Placeholder>Nazwa kraju</Placeholder>
          <Input id="name" type="text" placeholder="Podaj nazwe kraju..." value={props.name} onChange={props.onFieldChange.bind(this, 'newName')} />
        </Item>
        <Item>
          <Placeholder>Liczba ludnosci</Placeholder>
          <Input id="place" type="text" placeholder="Podaj liczbe ludnosci..." value={props.place} onChange={props.onFieldChange.bind(this, 'newPlace')} />
        </Item>
        <Item>
          <Placeholder>Powierzchnia</Placeholder>
          <Input id="date" type="text" placeholder="Podaj powierzchnie..." value={props.date} onChange={props.onFieldChange.bind(this, 'newDate')} />
        </Item>
      </Form>
      <Button type="submit">Dodaj</Button>
      <Button onClick={props.clearForm}>Wyczysc</Button>
    </form>
  );
}

EventAdd.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0 0;
`

const Item = styled.div`
  white-space: no-wrap;
  display: inline-block;
  width: 100%;
  margin: 0 auto;
  position: relative;
`

const Placeholder = styled.div`
  position: absolute;
  top: -1.2rem;
  overflow: hidden;
`

const Input = styled.input`
  white-space: no-wrap;
  width: 90%;
  justify-content: space-between;
  line-height: 2rem;
  border: 1px solid black;
  padding: 0 .5rem;
`

const Button = styled.button`
  display: block;
  width: 20%;
  margin: 1rem auto;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
`
export default EventAdd;
