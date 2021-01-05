import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { UserCollection } from '/imports/api/users';

class Local extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            count: 0,
        };
    }

    componentDidMount() {
        Meteor.subscribe('getUsers');
        const self = this;

        Tracker.autorun(function () {
            const users = UserCollection.find().fetch();

            if (users.length > 0) {
                const localUser = Session.get('local');
                const currentUser = users.find(u => u.name === localUser);
                self.setState({ id: currentUser._id, count: currentUser.count });
            }
        });
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        Meteor.subscribe('saveCount', { id: this.state.id, count: this.state.count });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleIncrement}>Click Me</button>
                <p>You've pressed the button {this.state.count} times.</p>
            </React.Fragment>
        )
    }
}

export default Local;
