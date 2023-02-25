import React from 'react'
import { NavLink } from 'react-router-dom';

type CardType = {
  imageUrl: string;
  index: number;
}

export const Card: React.FC<CardType> = ({imageUrl, index}) => {
  return (
    <NavLink to={'/fullOurWorksCard/' + index} className="card">
      <div className="card__image">
        <img src={imageUrl} alt="" />
      </div>
    </NavLink>
  )
}