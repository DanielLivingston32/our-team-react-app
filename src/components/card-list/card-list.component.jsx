import React from 'react';

import { Card } from '../card/card.component';

import './cart-list.styles.css';

export const CardList = (props) => (
  <div className="card-list">
    {console.log(props.users)}
    {console.log('CardList inter')}
    {props.users.map((user) => (
      <Card key={user.id.value} user={user} />
    ))}
  </div>
);
