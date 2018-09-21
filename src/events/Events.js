import React from 'react';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';
import * as actions from '../actions/events'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Events extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  handleSort(event) {
    event.preventDefault()
    const sortItem = event.currentTarget.id
    this.props.eventsSort(sortItem)
  }
  onClearClicked(event) {
    event.preventDefault();
    this.props.clearEvents()
  }

  onDeleteClicked(id, event) {
    event.preventDefault();
    this.props.clearEvent(id)
  }

  onFilterChange(event) {
    const value = event.currentTarget.value;
    this.props.filterEvents(value)
  };

  onEventFieldChange(field, event) {
    const value = event.currentTarget.value;
    this.props.changeFormField(field, value)
  }

  onEventAdd(event) {
    event.preventDefault();

    const {
      newName,
      newPlace,
      newDate,
    } = this.props
      this.props.eventAdd(newName, newPlace, newDate)
  }

  changeNumber(number){
    const value = number.replace(new RegExp("^(\\d{" + (number.length%3?number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
    return value
  }
  render() {
    return (
      <Container>
        <Title>Lista krajow</Title>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <Lista>
        <Headers>
          <HeaderTitle onClick={this.handleSort.bind(this)} id="name">
            <TitleText>Nazwa kraju</TitleText>
          </HeaderTitle>
          <HeaderTitle onClick={this.handleSort.bind(this)} id="place">
            <TitleText>Liczba ludnosci</TitleText>
          </HeaderTitle>
          <HeaderTitle onClick={this.handleSort.bind(this)} id="date">
            <TitleText>Powierzchnia</TitleText>
          </HeaderTitle>
        </Headers>
          {this.props.events.map(item => {

            if (item.name.indexOf(this.props.filter) > -1 || item.date.indexOf(this.props.filter) > -1 || item.place.indexOf(this.props.filter) > -1) {
              return (
                <EventItem {...item} local={item.local} key={`${item.id}${item.name}${item.place}${item.date}`} onDeleteClicked={this.onDeleteClicked.bind(this)} changeNumber={this.changeNumber.bind(this)}/>
              );
            }

            return null;
          })}
        </Lista>
        <EventAdd name={this.props.newName}
                  place={this.props.newPlace}
                  date={this.props.newDate}
                  onFieldChange={this.onEventFieldChange.bind(this)}
                  clearForm={this.onClearClicked.bind(this)}
                  onFormSubmit={this.onEventAdd.bind(this)}
        />
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearEvents: () => dispatch(actions.clearEvents()),
    clearEvent: (id) => dispatch(actions.clearEvent(id)),
    filterEvents: (filter) => dispatch(actions.filterEvents(filter)),
    changeFormField: (field, value) => dispatch(actions.changeFormField(field, value)),
    eventAdd: (name, place, date) => dispatch(actions.eventAdd(name, place, date)),
    eventsSort: (id) => dispatch(actions.eventsSort(id)),
    getEvents: () => dispatch(actions.getEvents())
  }
}

const Container = styled.div`
  min-width: 390px;
  max-width: 100%;
  margin: 0 auto;
`

const TitleText = styled.div`
`

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: bold;
`

const Headers = styled.div`
  background-color: #CCD;
  margin: 0 auto;
  line-height: 24px;
`

const HeaderTitle = styled.div`
  width: 33.05%;
  text-align: left;
  display: inline-block;
  border-right: 1px solid black;
  cursor: pointer;
  &:last-of-type{
    border-right: none;
  }
`

const Lista = styled.div`
  margin-top: 1rem;
  overflow: hidden;
  border: 2px solid black;
  li:nth-child(even) {background: #CCC};
  li:nth-child(odd) {background: #FFF};
`

export default connect(mapStateToProps, mapDispatchToProps)(Events);
