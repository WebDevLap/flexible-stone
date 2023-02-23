import React from 'react';
import { GetConsultBtn } from './GetConsultBtn';

type UsingTwoColumnType = {
  title: JSX.Element;
  subtitle: JSX.Element;
  imageUrl: string;
};

export const UsingTwoColumn: React.FC<UsingTwoColumnType> = ({ imageUrl, title, subtitle }) => {
  return (
    <section className="usingTwoColumn">
      <div className="usingTwoColumn__container _container">
        <div className="usingTwoColumn__img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="usingTwoColumn__content">
          <h2 className="usingTwoColumn__title">{title}</h2>
          <div className="usingTwoColumn__subtitle">{subtitle}</div>
          <GetConsultBtn children="Узнать больше" />
        </div>
      </div>
    </section>
  );
};
