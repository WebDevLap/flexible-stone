import React from 'react';
import { Using } from '../../components/Using';
import { TechDescription } from './components/TechDescription';
import { Adventages } from '../../components/Adventages';
import { StagesWork } from './components/StagesWork';
import { OurProducts } from './components/OurProducts';
import { MainBlock } from '../../components/MainBlock';
import bgImage1 from '../../assets/image/HomePage/bgImage1.jpg';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';
import image1 from '../../assets/image/img6.jpg';

export const HomePage: React.FC = () => {
  return (
    <main className="">
      <MainBlock
        title="Производство и продажа термопанелей на основе <span>гибкого камня</span>"
        subtitle="Красивый, качественный и современный материал по доступной цене !"
        bgImageUrl={bgImage1}
      />
      <UsingTwoColumn
        title={<>Применение гибкого камня</>}
        subtitle={
          <>
            Гибкий камень - это качественный строительный материал, который используется во
            внутренней и внешней отделке помещений. Он изготавливается из экологически чистых
            материалов и имеет все необходимые сертификаты.
            <br /> Гибкий камень применяется: на стенах, полах, ступенях, подоконниках, столешницах,
            в ванных комнатах, бассейнах, саунах, витражах, кухонных фартуках, и этот список можно
            продолжать долго.
          </>
        }
        imageUrl="https://thumb.tildacdn.com/tild6532-3062-4034-a638-383962376465/-/cover/806x740/center/center/-/format/webp/2022-05-20_19-00-06.png"
      />
      <TechDescription />
      <Adventages
        title={<>Преимущества гибкого камня</>}
        imageUrl={
          'https://thumb.tildacdn.com/tild3933-3264-4630-a438-306232356535/-/resize/560x/-/format/webp/2.jpg'
        }
      />
      <StagesWork />
      <OurProducts />
    </main>
  );
};
