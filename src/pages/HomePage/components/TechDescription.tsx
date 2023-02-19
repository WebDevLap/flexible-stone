import React from 'react';
import { NavLink } from 'react-router-dom';

type TechDescItemType = {
  imageUrl: string;
  title: string;
  subtitle: string;
  linkTo: string;
};

const techDescItems: TechDescItemType[] = [
  {
    imageUrl:
      'https://thumb.tildacdn.com/tild3134-6439-4033-a239-653861396238/-/format/webp/IMG_1346.jpg',
    title: 'Гибкий кирпич',
    subtitle: 'Выполняется на сетке и на гибких панелях с затиркой. Экологичен и натурален.',
    linkTo: '/',
  },
  {
    imageUrl: 'https://thumb.tildacdn.com/tild6536-6361-4263-b365-656265623564/-/format/webp/2.jpg',
    title: 'Гибкая плитка',
    subtitle:
      'Применяются в декоративной отделке помещений и фасадах зданий.',
    linkTo: '/',
  },
  {
    imageUrl:
      'https://thumb.tildacdn.com/tild3162-3637-4061-b661-353930653437/-/format/webp/Facciate-esterni-tra.jpg',
    title: 'Фасадные панели',
    subtitle:
      'Выполняются на пенополистироле от 30 до 70 мм толщиной. Покрыты армирующим слоем и гибким камнем под мрамор, травертин, сланец или кирпич.',
    linkTo: '/',
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
