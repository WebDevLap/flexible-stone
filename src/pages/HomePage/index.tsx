import React from 'react';
import { Using } from '../../components/Using';
import { TechDescription } from './components/TechDescription';
import { Adventages } from '../../components/Adventages';
import { StagesWork } from './components/StagesWork';
import { OurProducts } from './components/OurProducts';
import { MainBlock } from '../../components/MainBlock';
import bgImage1 from '../../assets/image/HomePage/bgImage1.jpg';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';

export const HomePage: React.FC = () => {
  return (
    <main className="">
      <MainBlock
        title="Производство и продажа изделий на основе <span>гибкого камня</span>"
        subtitle="Красивый, качественный и современный материал по доступной цене !"
        bgImageUrl={bgImage1}
      />
      <UsingTwoColumn
        title={<>Применение гибкого камня</>}
        subtitle={<>Гибкий камень - это качественный строительный материал, который используется во
        внутренней и внешней отделке помещений. Он изготавливается из экологически чистых
        материалов и имеет все необходимые сертификаты.
        <br /> Гибкий камень применяется: на стенах, полах, ступенях, подоконниках,
        столешницах, в ванных комнатах, бассейнах, саунах, витражах, кухонных фартуках, и
        этот список можно продолжать долго.</>}
        imageUrl="https://pro-dachnikov.com/uploads/posts/2021-10/1633775256_115-pro-dachnikov-com-p-dom-v-angliiskom-stile-odnoetazhnii-foto-124.jpg"
      />
      <TechDescription />
      <Adventages
        title={<>Преимущества гибкого камня</>}
        imageUrl="https://i.pinimg.com/originals/01/dd/c5/01ddc51c433f58de674cb0f1d0f4dd9f.jpg"
      />
      <StagesWork />
      <OurProducts />
    </main>
  );
};
