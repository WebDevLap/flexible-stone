import React from 'react';
import parse from 'html-react-parser';
//1 "https://thumb.tildacdn.com/tild6532-3062-4034-a638-383962376465/-/cover/806x740/center/center/-/format/webp/2022-05-20_19-00-06.png"
//2 "https://thumb.tildacdn.com/tild6135-3835-4563-a436-376261326365/-/resize/740x/-/format/webp/2022-05-20_19-01-46.png"
// Применение гибкого камня
// Гибкий камень - это качественный строительный материал, который используется во
// внутренней и внешней отделке помещений. Он изготавливается из экологически чистых
// материалов и имеет все необходимые сертификаты.
// <br /> Гибкий камень применяется: на стенах, полах, ступенях, подоконниках,
// столешницах, в ванных комнатах, бассейнах, саунах, витражах, кухонных фартуках, и
// этот список можно продолжать долго.
type UsingType = {
  imageUrl1: string;
  imageUrl2?: string;
  title: string;
  subtitle: string;
  imageWidth?: number;
};

export const Using: React.FC<UsingType> = ({ imageUrl1, imageUrl2, title, subtitle, imageWidth }) => {
  return (
    <section className="using">
      <div className="using__container _container">
        <div className="using__content">
          <ul className="using__list">
            <li className="using-list__image">
              <img src={imageUrl1} alt="" style={{width: imageWidth + 'px'}}/>
            </li>
            <li className="using-list__content">
              <div className="using-list-content__title">{parse(title)}</div>
              <div className="using-list-content__subtitle">{parse(subtitle)}</div>
            </li>
            <li className="using-list__image">
              {imageUrl2 && <img src={imageUrl2} alt="" />}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
