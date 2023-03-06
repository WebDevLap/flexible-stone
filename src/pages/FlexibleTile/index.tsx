import React from 'react';
import { Adventages } from '../../components/Adventages';
import { Collection } from '../../components/Collection/Collection';
import { MainBlock } from '../../components/MainBlock';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';
import image1 from '../../assets/image/img5.jpg';
import image2 from '../../assets/image/img2.jpg';


import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
import img10 from './assets/images/img10.jpg';
import img11 from './assets/images/img11.jpg';
import img12 from './assets/images/img12.jpg';
import img13 from './assets/images/img13.jpg';
import img14 from './assets/images/img14.jpg';
import img15 from './assets/images/img15.jpg';

import img16 from './assets/images/2Kind/img16.jpg';
import img17 from './assets/images/2Kind/img17.jpg';
import img18 from './assets/images/2Kind/img18.jpg';
import img19 from './assets/images/2Kind/img19.jpg';
import img20 from './assets/images/2Kind/img20.jpg';
import img21 from './assets/images/2Kind/img21.jpg';
import img22 from './assets/images/2Kind/img22.jpg';
import img23 from './assets/images/2Kind/img23.jpg';
import img24 from './assets/images/2Kind/img24.jpg';
import img25 from './assets/images/2Kind/img25.jpg';

import img26 from './assets/images/2Kind/img26.jpg';
import img27 from './assets/images/2Kind/img29.jpg';
import img28 from './assets/images/2Kind/img30.jpg';
import img29 from './assets/images/2Kind/img31.jpg';
import img30 from './assets/images/2Kind/img32.jpg';
import img31 from './assets/images/2Kind/img33.jpg';
import img32 from './assets/images/2Kind/img34.jpg';
import img33 from './assets/images/2Kind/img35.jpg';


const collectionItems = [
  {
    imageUrl: img1,
    imageUrl2: img2,
    imageUrl3: img3,
  },
  {
    imageUrl: img4,
    imageUrl2: img5,
    imageUrl3: img6,
  },
  {
    imageUrl: img7,
    imageUrl2: img8,
    imageUrl3: img9,
  },
  {
    imageUrl: img10,
    imageUrl2: img11,
    imageUrl3: img12,
  },
  {
    imageUrl: img13,
    imageUrl2: img14,
    imageUrl3: img15,
  },
  {
    imageUrl: img16,
    imageUrl2: img17,
    imageUrl3: img18,
  },
  {
    imageUrl: img19,
    imageUrl2: img20,
    imageUrl3: img21,
  },
  {
    imageUrl: img22,
    imageUrl2: img23,
    imageUrl3: img24,
  },
  {
    imageUrl: img25,
    imageUrl2: img26,
    imageUrl3: img27,
  },
  {
    imageUrl: img28,
    imageUrl2: img29,
    imageUrl3: img30,
  },
  {
    imageUrl: img31,
    imageUrl2: img32,
    imageUrl3: img33,
  },
];

export const FlexibleTile = () => {
  return (
    <div className="flexibleTile">
      <MainBlock
        title="<span>Гибкая плитка под камень</span>
- уникальная технология на основе мрамора и спокойных полимеров"
        subtitle=""
        bgImageUrl="https://krov-torg.ru/wp-content/uploads/2019/08/18-12.jpg"
      />
      <UsingTwoColumn
        title={<>Технология и применение гибкой плитки</>}
        subtitle={
          <>
            По мнению большинства современных дизайнеров, из всех новых материалов именно гибкая
            плитка является наиболее удачной попыткой, позволяющей безошибочно создать текстуру
            природного материала на искусственной основе. Исходным сырьем для его производства
            является мраморная крошка. В результате естественной реакции с акрил-полимерной группой
            она соединятся и превращается в единый монолитный пласт материала. Гибкая плитка
            применяется: на стенах, полах, ступенях, подоконниках, столешницах, в ванных комнатах,
            бассейнах, саунах, витражах, кухонных фартуках. Её отличительной особенностью является
            легкость и гибкость, при невероятной прочности и главное - удивительная схожесть с
            натуральным срезом камня
          </>
        }
        imageUrl={image1}
      />
      <Adventages
        title={<>Преимущества Гибкой Плитки</>}
        imageUrl={image2}
      />
      <Collection
        collectionItems={collectionItems}
        title={<>Коллекция гибкой плитки</>}
        subtitle={
          <>
            Представленные образцы гибкой плитки созданы дизайнерским коллективом на основе
            современных цветовых тенденций
          </>
        }
      />
    </div>
  );
};
