import React from 'react';
import parse from 'html-react-parser';

export type CollectionItemType = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

type CollectionType = {
  collectionItems: CollectionItemType[];
  title: JSX.Element;
};

export const Collection: React.FC<CollectionType> = ({ collectionItems, title }) => {
  return (
    <section className="collection">
      <div className="collection__container _container">
        <h2 className="collection__title">{title}</h2>
        <p className="collection__subtitle">
          Представленные образцы кирпича на панелях созданы дизайнерским коллективом на основе
          современных цветовых тенденций
        </p>
        <ul className="collection__list">
          {collectionItems.map((item, index) => {
            return (
              <li className="collection__item" key={index}>
                <div className="collection-item__content">
                  <h2 className="collection-item__title">{parse(item.title)}</h2>
                  <p className="collection-item__subtitle">{parse(item.subtitle)}</p>
                </div>
                <div className="collection-item__img">
                  <img src={item.imageUrl} alt="" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
