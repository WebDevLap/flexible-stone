import React from 'react';
import parse from 'html-react-parser';
import { useAppSelector } from '../store/store';
import { setConsultationIsActive } from '../store/slices/consultation';
import { useDispatch } from 'react-redux/es/exports';
import { GetConsultBtn } from './GetConsultBtn';

type MainBlockType = {
  bgImageUrl: string;
  title: string;
  subtitle: string;
};

export const MainBlock: React.FC<MainBlockType> = ({ bgImageUrl, title, subtitle }) => {
  const dispatch = useDispatch();
  return (
    <section className="main">
      <div className="container">
        <div className="main__container _container">
          <div className="main__bg-image">
            <img src={bgImageUrl} alt="" />
          </div>
          <div className="main__content">
            <ul className="main-content__list">
              <li className="main-content__title h1Title">{parse(title)}</li>
              <li className="main-content__subtitle">{parse(subtitle)}</li>
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
              <GetConsultBtn>Получить консультация</GetConsultBtn>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
