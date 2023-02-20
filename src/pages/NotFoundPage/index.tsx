import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <section className="notFound">
      <div className="notFound__container _container">
        <div className="notFound__content">
          <div className="notFound-content__title">Ошибка 404</div>
          <p className="notFound-content__subtitle">
            Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно
            она устарела, была удалена, или был введен неверный адрес в адресной строке
          </p>
          <NavLink to="/" className="notFound-content__btn">
            Перейти на главную
          </NavLink>
        </div>
      </div>
    </section>
  );
};
