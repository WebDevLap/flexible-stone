import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../../assets/image/img6.jpg';
import image2 from '../../../assets/image/img7.jpg';

type TechDescItemType = {
  imageUrl: string;
  title: string;
  subtitle: string;
  linkTo: string;
};

const techDescItems: TechDescItemType[] = [
  {
    imageUrl: image2,
    title: 'Гибкий кирпич',
    subtitle: 'Выполняется на сетке и на гибких панелях с затиркой. Экологичен и натурален.',
    linkTo: '/flexibleStone',
  },
  {
    imageUrl: 'https://thumb.tildacdn.com/tild6536-6361-4263-b365-656265623564/-/format/webp/2.jpg',
    title: 'Гибкая плитка',
    subtitle: 'Применяются в декоративной отделке помещений и фасадах зданий.',
    linkTo: '/flexibleTile',
  },
  {
    imageUrl: image1,
    title: 'Фасадные панели',
    subtitle:
      'Выполняются на пенополистироле от 30 до 70 мм толщиной. Покрыты армирующим слоем и гибким камнем под мрамор, травертин, сланец или кирпич.',
    linkTo: '/facadeTermelPanels',
  },
];

export const TechDescription: React.FC = () => {
  return (
    <section className="techDesc">
      <div className="techDesc__container _container">
        <ul className="techDesc__list">
          {techDescItems.map((item, index) => {
            return (
              <li className="techDesc-list__item" key={index}>
                <div className="techDesc-item__img">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="techDesc-item__content">
                  <div className="techDesc-item__title">{item.title}</div>
                  <div className="techDesc-item__subtitle">{item.subtitle}</div>
                  <NavLink to={item.linkTo} className="techDesc-item__btn">
                    Перейти
                  </NavLink>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
