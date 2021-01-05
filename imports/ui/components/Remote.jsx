import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { UserCollection } from '/imports/api/users';

Session.set('remote', 'B');

class Remote extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        Meteor.subscribe('getUsers');
        const self = this;

        Tracker.autorun(function () {
            const users = UserCollection.find().fetch();

            if (users.length > 0) {
                const remoteUser = Session.get('remote');
                const currentUser = users.find(u => u.name === remoteUser);
                self.setState({ count: currentUser.count });
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <p>Someone else pressed the button {this.state.count} times.</p>
            </React.Fragment>
        )
    }
}

export default Remote;
