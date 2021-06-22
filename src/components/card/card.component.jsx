import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt="user" src={`${props.user.picture.large}`} />
    <h2>
      {props.user.name.first} {props.user.name.last}
    </h2>
    <p>{props.user.email}</p>

    <p>
      <FontAwesomeIcon className="phoneIcon" icon={faPhoneSquareAlt} />{' '}
      {props.user.phone}
    </p>
  </div>
);
