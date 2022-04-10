import React, { Fragment } from 'react';
import ErrorBoundary from './ErrorBoundary';

import classes from './UserFinder.module.css';

import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];
  

class UserFinder extends React.Component {

    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        };
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.searchTerm !== this.state.searchTerm){

        

        this.setState({
            filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)),

        })};


    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }


  render () {
  return (
    <Fragment>
        <ErrorBoundary>
      <input type='search' onChange={this.searchChangeHandler.bind(this)} className={classes.finder}/>
      <Users users={this.state.filteredUsers} />
      </ErrorBoundary>
    </Fragment>
  )}

};

export default UserFinder;