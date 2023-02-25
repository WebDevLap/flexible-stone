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
              <div className="main-content__btns">
                <GetConsultBtn>Получить консультацию</GetConsultBtn>
                <div className="main-content-btns__soc-network">
                  <a href='https://t.me/+79619751680'>
                    <img src="https://img.icons8.com/fluency/2x/telegram-app.png" alt="" />
                  </a>
                  <a href='https://wa.me/+79619751680'>
                    <img src="https://img.icons8.com/cotton/2x/whatsapp--v4.png" alt="" />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
