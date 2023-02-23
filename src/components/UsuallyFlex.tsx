import React from 'react';
import { GetConsultBtn } from './GetConsultBtn';

type UsuallyFlexType = {
  title: JSX.Element
  subtitle: JSX.Element
  imageUrl: string;
}

export const UsuallyFlex: React.FC<UsuallyFlexType> = ({title, subtitle, imageUrl}) => {
  return (
    <section className="usuallyFlex">
      <div className="usuallyFlex__container _container">
        <h2 className="usuallyFlex__title">{title}</h2>
        <div className="usuallyFlex__flex">
          <div className="usuallyFlex-flex__content">
            <p className="usuallyFlex__text">
              {subtitle}
            </p>
            <GetConsultBtn children="Узнать больше" />
          </div>
          <div className="usuallyFlex__img">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
