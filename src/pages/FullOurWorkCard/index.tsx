import React from 'react';
import { useParams } from 'react-router-dom';
import { ourWorksData } from '../OurWorks';

export const FullOurWorksCard: React.FC = () => {
  const params = useParams();

  return (
    <section className="fullOurWorksCard">
      <div className="fullOurWorksCard__container _container">
        <h2 className="fullOurWorksCard__title h1Title">Фотографии</h2>
        <ul className="fullOurWorksCard__list">
          {params.id &&
            ourWorksData[+params.id].images.map((item, index) => {
              return (
                <div className="fullOurWorksCard__img" key={index}>
                  <img src={item} alt="" />
                </div>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
