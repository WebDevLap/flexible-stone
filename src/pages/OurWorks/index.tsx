import React from 'react';
import { MainBlock } from '../../components/MainBlock';
import { Card } from './components/Card';
import object1_img1 from './assets/image/object1/img1.jpg';
import object1_img2 from './assets/image/object1/img2.jpg';
import object1_img3 from './assets/image/object1/img3.jpg';
import object1_img4 from './assets/image/object1/img4.jpg';
import object1_img5 from './assets/image/object1/img5.jpg';
import object1_img6 from './assets/image/object1/img6.jpg';
import object1_img7 from './assets/image/object1/img7.jpg';
import object1_img8 from './assets/image/object1/img8.jpg';
import object1_img9 from './assets/image/object1/img9.jpg';
import object1_img10 from './assets/image/object1/img10.jpg';
import object1_img11 from './assets/image/object1/img11.jpg';
import object1_img12 from './assets/image/object1/img12.jpg';
import object1_img13 from './assets/image/object1/img13.jpg';

import object2_img1 from './assets/image/object2/img1.jpg';
import object2_img2 from './assets/image/object2/img2.jpg';
import object2_img3 from './assets/image/object2/img3.jpg';
import object2_img4 from './assets/image/object2/img4.jpg';
import object2_img5 from './assets/image/object2/img5.jpg';
import object2_img6 from './assets/image/object2/img6.jpg';

import object3_img1 from './assets/image/object3/img1.jpg';
import object3_img2 from './assets/image/object3/img2.jpg';
import object3_img3 from './assets/image/object3/img3.jpg';
import object3_img4 from './assets/image/object3/img4.jpg';
import object3_img5 from './assets/image/object3/img5.jpg';
import object3_img6 from './assets/image/object3/img6.jpg';
import object3_img7 from './assets/image/object3/img7.jpg';
import object3_img8 from './assets/image/object3/img8.jpg';
import object3_img9 from './assets/image/object3/img9.jpg';

import object4_img1 from './assets/image/object4/img1.jpg';
import object4_img2 from './assets/image/object4/img2.jpg';
import object4_img3 from './assets/image/object4/img3.jpg';
import object4_img4 from './assets/image/object4/img4.jpg';

import object5_img1 from './assets/image/object5/img1.jpg';
import object5_img2 from './assets/image/object5/img2.jpg';
import object5_img3 from './assets/image/object5/img3.jpg';
import object5_img4 from './assets/image/object5/img4.jpg';

import object6_img1 from './assets/image/object6/img1.jpg';
import object6_img2 from './assets/image/object6/img2.jpg';
import object6_img3 from './assets/image/object6/img3.jpg';
import object6_img4 from './assets/image/object6/img4.jpg';
import object6_img5 from './assets/image/object6/img5.jpg';
import object6_img6 from './assets/image/object6/img6.jpg';
import object6_img7 from './assets/image/object6/img7.jpg';
import object6_img8 from './assets/image/object6/img8.jpg';
import object6_img9 from './assets/image/object6/img9.jpg';

type OurWorksDataType = {
  showImageUrl: string;
  images: string[];
};

export const ourWorksData: OurWorksDataType[] = [
  {
    showImageUrl: object1_img4,
    images: [
      object1_img1,
      object1_img2,
      object1_img3,
      object1_img4,
      object1_img5,
      object1_img6,
      object1_img7,
      object1_img8,
      object1_img9,
      object1_img10,
      object1_img11,
      object1_img12,
      object1_img13,
    ],
  },
  {
    showImageUrl: object2_img2,
    images: [object2_img1, object2_img2, object2_img3, object2_img4, object2_img5, object2_img6],
  },
  {
    showImageUrl: object3_img2,
    images: [
      object3_img1,
      object3_img2,
      object3_img3,
      object3_img4,
      object3_img5,
      object3_img6,
      object3_img7,
      object3_img8,
      object3_img9,
    ],
  },
  {
    showImageUrl: object4_img4,
    images: [object4_img1, object4_img2, object4_img3, object4_img4],
  },
  {
    showImageUrl: object5_img1,
    images: [object5_img1, object5_img2, object5_img3, object5_img4],
  },
  {
    showImageUrl: object6_img3,
    images: [
      object6_img1,
      object6_img2,
      object6_img3,
      object6_img4,
      object6_img5,
      object6_img6,
      object6_img7,
      object6_img8,
      object6_img9,
    ],
  },
];

export const OurWorks = () => {
  return (
    <>
      <MainBlock
        bgImageUrl="https://mykaleidoscope.ru/uploads/posts/2020-03/1584614677_2-p-krasivie-derevyannie-doma-10.jpg"
        title="Наши работы"
        subtitle="Здесь хранятся работы, которые так или иначе соотрудничали с нашей компанией, и которые пользовались нашими услугами"
      />
      <div className="ourWorks">
        <div className="ourWorks__container _container">
          <div className="ourWorks__title h1Title">Нажмите чтобы увидеть больше информации</div>
          <ul className="ourWorks__list">
            {ourWorksData.map((item, index) => (
              <Card imageUrl={item.showImageUrl} key={index} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
