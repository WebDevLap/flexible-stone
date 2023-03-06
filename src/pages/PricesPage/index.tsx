import { FC } from 'react';

export const PricesPage: FC = () => {
  const pricesList: string[] = [
    `Термопанели толщина 30 мм - 1200 рублей кв/метр`,
    `Термопанели толщина 40 мм - 1300 рублей кв/метр`,
    `Термопанели толщина 50 мм - 1400 рублей кв/метр`,
    `Гибкий камень - 800 рублей кв/метр`,
    `Термооткос - 800 рублей п/метр `,
    `Грунтовка глубокого проникновения-450 р 5 литров`,
  ];

  return (
    <div className="prices">
      <div className="prices__container _container">
        <ul className="prices__list">
          {pricesList.map((item, index) => (
            <li className="prices__item" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
