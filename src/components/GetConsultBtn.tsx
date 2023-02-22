import React from 'react';
import { setConsultationIsActive } from '../store/slices/consultation';
import { useDispatch } from 'react-redux';

export const GetConsultBtn = ({children}: {children: string}) => {
  const dispatch = useDispatch()
  
  return (
    <button
      className="getConsultate"
      onClick={(e) => {
        dispatch(setConsultationIsActive(true));
        e.stopPropagation();
      }}>
      {children}
    </button>
  );
}
