import React from 'react';
import { Using } from '../../components/Using';
import { TechDescription } from './components/TechDescription';
import { Adventages } from '../../components/Adventages';
import { StagesWork } from './components/StagesWork';
import { OurProducts } from './components/OurProducts';
import { MainBlock } from '../../components/MainBlock';

export const HomePage: React.FC = () => {
  return (
    <main className="">
      <MainBlock
        title="Производство и продажа изделий на основе <span>гибкого камня</span>"
        subtitle="Красивый, качественный и современный материал по доступной цене !"
        bgImageUrl="https://thumb.tildacdn.com/tild3537-3237-4537-b733-363864376364/-/format/webp/0001.jpg"></MainBlock>
      <Using
        title="Применение гибкого камня"
        subtitle="Гибкий камень - это качественный строительный материал, который используется во
        внутренней и внешней отделке помещений. Он изготавливается из экологически чистых
        материалов и имеет все необходимые сертификаты.
        <br /> Гибкий камень применяется: на стенах, полах, ступенях, подоконниках,
        столешницах, в ванных комнатах, бассейнах, саунах, витражах, кухонных фартуках, и
        этот список можно продолжать долго."
        imageUrl1="https://thumb.tildacdn.com/tild6532-3062-4034-a638-383962376465/-/cover/806x740/center/center/-/format/webp/2022-05-20_19-00-06.png"
        imageUrl2="https://thumb.tildacdn.com/tild6135-3835-4563-a436-376261326365/-/resize/740x/-/format/webp/2022-05-20_19-01-46.png"
      />
      <TechDescription />
      <Adventages />
      <StagesWork />
      <OurProducts />
    </main>
  );
};
