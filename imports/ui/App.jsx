import React from 'react';
import { Session } from 'meteor/session';
import Local from './components/Local';
import Remote from './components/Remote';

Session.set('local', 'A');

export const App = () => (
  <div>
    <h1>Delibr Coding Challenge!</h1>
    <Local />
    <Remote />
  </div>
);
