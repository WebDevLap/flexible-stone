import React from 'react';

export const Main = () => {
  return (
    <section className="main">
      <div className="main__container _container">
        <div className="main__bg-image">
          <img src="https://thumb.tildacdn.com/tild3537-3237-4537-b733-363864376364/-/format/webp/0001.jpg" alt="" />
        </div>
        <div className="main__content">
          <ul className="main-content__list">
            <li className="main-content__title">
              Производство и продажа изделий на основе <span>гибкого камня</span>
            </li>
            <li className="main-content__subtitle">
              Красивый, качественный и современный материал по доступной цене !
            </li>
            <ul className="main-content__characters">
              <li className="main-content-characters__item">
                Влагоустойчивый, экологически чистый материал
              </li>
              <li className="main-content-characters__item">
                Огнестойкий, практичный и долговечный
              </li>
              <li className="main-content-characters__item">
                Высокая экономия на отделке и отоплении
              </li>
            </ul>
            <button className="main-content__btn">Получить консультацию</button>
          </ul>
        </div>
      </div>
    </section>
  );
};
