import React from 'react';

type OurProductType = {
  imageUrl: string;
  title: string;
};

const ourProducts: OurProductType[] = [
  {
    imageUrl:
      'https://hazdecor.ru/wp-content/uploads/2022/05/%D0%B3%D0%B8%D0%B1%D0%BA%D0%B8%D0%B9-NT-06-1.jpg',
    title: 'Гибкий камень',
  },
  {
    imageUrl:
      'https://hazdecor.ru/wp-content/uploads/2022/05/%D0%BE%D0%BF%D0%B0%D0%BB-%D1%80%D0%B5%D0%B4-300x300.jpg',
    title: 'Гибкий мрамор',
  },
  {
    imageUrl:
      'https://hazdecor.ru/wp-content/uploads/2022/05/015555B3-9EF1-4032-A8D4-2F2D07970BC2-1-300x300.jpg',
    title: 'Гибкий кирпич модульный',
  },
  {
    imageUrl: 'https://hazdecor.ru/wp-content/uploads/2022/04/111111111111111-300x212.png',
    title: 'Термопанели',
  },
  {
    imageUrl: 'https://hazdecor.ru/wp-content/uploads/2022/04/IMG_6909-225x300.jpg',
    title: 'Каменный скол',
  },
  {
    imageUrl:
      'https://hazdecor.ru/wp-content/uploads/2022/03/%D0%B6%D0%B6%D0%B5%D0%BD%D1%8B%D0%B9-1-225x300.jpg',
    title: 'Гибкий кирпич',
  },
];

export const OurProducts = () => {
  return (
    <section className="ourProducts">
      <div className="ourProducts__container _container">
        <h2 className="ourProducts__title">Наши товары</h2>
        <div className="ourProducts__content">
          <ul className="ourProducts-content__list">
            {ourProducts.map((item, index) => {
              return (
                <li className="ourProducts__item" key={index}>
                  <div className="ourProducts-item__img">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <h3 className="ourProducts-item__title">{item.title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
