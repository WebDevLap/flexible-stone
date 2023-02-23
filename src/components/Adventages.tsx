import React from 'react';

type AdventageParamType = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

const AdventageParams: AdventageParamType[] = [
  {
    imageUrl: 'https://static.tildacdn.com/tild6461-3061-4533-b338-623931383661/014.svg',
    title: 'Огнеупорность и водостойкость',
    subtitle:
      'Гибкий камень не горит и не пропускает воду, не подвержен перепадам температур. Он морозостоек, не повреждается микроорганизмами.',
  },
  {
    imageUrl: 'https://static.tildacdn.com/tild3531-6231-4161-a537-633661373266/012.svg',
    title: 'Легкий вес',
    subtitle:
      'Гибкий камень можно использовать для отделки балконов, на которых принципиально важна весовая нагрузка.',
  },
  {
    imageUrl: 'https://static.tildacdn.com/tild3334-3963-4264-b061-623736623862/013.svg',
    title: 'Простота установки',
    subtitle:
      'Монтаж не требует особых инструментов, не оставляет отходов, работы можно проводить без опасений за уже готовую отделку.',
  },
  {
    imageUrl: 'https://static.tildacdn.com/tild6364-6330-4033-b966-346666363063/003.svg',
    title: 'Долговечность',
    subtitle:
      'Средние сроки гарантии эксплуатации — 30-35 лет. При бережном отношении, материал прослужит гораздо дольше, его срока службы хватит до следующего капитального ремонта.',
  },
];

export const Adventages: React.FC<{title: JSX.Element, imageUrl: string}> = ({title, imageUrl}) => {
  return (
    <section className="adventages">
      <div className="adventages__container _container">
        <h2 className="adventages__title">{title}</h2>
        <div className="adventages__content">
          <div className="adventages-content__img">
            <img
              src={imageUrl}
              alt=""
            />
          </div>
          <ul className="adventages-content__params">
            {AdventageParams.map((item, index) => {
              return (
                <li key={index} className="adventages-content__param adventage-param">
                  <div className="adventage-param__img">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className="adventage-param__content">
                    <div className="adventage-param__title">{item.title}</div>
                    <div className="adventage-param__subtitle">{item.subtitle}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
