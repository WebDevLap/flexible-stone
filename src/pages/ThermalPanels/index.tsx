import { Adventages } from '../../components/Adventages';
import { Collection } from '../../components/Collection/Collection';
import { MainBlock } from '../../components/MainBlock';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';
import { CollectionItemType } from '../../components/Collection/Collection';
import image1 from '../../assets/image/img3.jpg'



import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'
import img6 from './assets/images/img6.jpg'
import img7 from './assets/images/img7.jpg'
import img8 from './assets/images/img8.jpg'
import img9 from './assets/images/img9.jpg'
import img10 from './assets/images/img10.jpg'

import img11 from './assets/images/img11.jpg'
import img12 from './assets/images/img12.jpg'
import img13 from './assets/images/img13.jpg'
import img14 from './assets/images/img14.jpg'
import img15 from './assets/images/img15.jpg'
import img16 from './assets/images/img16.jpg'
import img17 from './assets/images/img17.jpg'
import img18 from './assets/images/img18.jpg'
import img19 from './assets/images/img19.jpg'
import img20 from './assets/images/img20.jpg'

import img21 from './assets/images/img21.jpg'
import img22 from './assets/images/img22.jpg'
import img23 from './assets/images/img23.jpg'
import img24 from './assets/images/img24.jpg'
import img25 from './assets/images/img25.jpg'
import img26 from './assets/images/img26.jpg'
import img27 from './assets/images/img27.jpg'
import img28 from './assets/images/img28.jpg'
import img29 from './assets/images/img29.jpg'
import img30 from './assets/images/img30.jpg'

import img31 from './assets/images/img31.jpg'
import img32 from './assets/images/img32.jpg'
import img33 from './assets/images/img33.jpg'
import img34 from './assets/images/img34.jpg'
import img35 from './assets/images/img35.jpg'
import img36 from './assets/images/img36.jpg'
import img37 from './assets/images/img37.jpg'
import img38 from './assets/images/img40.jpg'
import img39 from './assets/images/img41.jpg'
import img40 from './assets/images/img42.jpg'






const termopanelCollection: CollectionItemType[] = [
  {
    imageUrl:  img1,
    imageUrl2: img2,
    imageUrl3:  img3,
  },
  {
    imageUrl:  img4,
    imageUrl2: img5,
    imageUrl3:  img6,
  },
  {
    imageUrl:  img7,
    imageUrl2: img8,
    imageUrl3:  img9,
  },
  {
    imageUrl:  img10,
    imageUrl2: img11,
    imageUrl3:  img12,
  },
  {
    imageUrl:  img13,
    imageUrl2: img14,
    imageUrl3:  img15,
  },
  {
    imageUrl:  img16,
    imageUrl2: img17,
    imageUrl3:  img18,
  },

  {
    imageUrl:  img19,
    imageUrl2: img20,
    imageUrl3:  img21,
  },
  {
    imageUrl:  img22,
    imageUrl2: img23,
    imageUrl3:  img24,
  },
  {
    imageUrl:  img25,
    imageUrl2: img26,
    imageUrl3:  img27,
  },

  {
    imageUrl:  img28,
    imageUrl2: img29,
    imageUrl3:  img30,
  },
  {
    imageUrl:  img31,
    imageUrl2: img31,
    imageUrl3:  img32,
  },
  {
    imageUrl:  img33,
    imageUrl2: img34,
    imageUrl3:  img35,
  },

  {
    imageUrl:  img36,
    imageUrl2: img37,
    imageUrl3:  img38,
  },
  {
    imageUrl:  img39,
    imageUrl2: img40,
    imageUrl3:  '',
  },
]

export const ThermalPanels: React.FC = () => {
  return (
    <div className="thermalPanels">
      <MainBlock
        title="<span>Фасадные термопанели</span> - универсальные, практичные, огнестойкие и
              долговечные"
        subtitle=""
        bgImageUrl="https://thumb.tildacdn.com/tild3739-6132-4539-b737-386335653066/-/format/webp/981_original.jpg"
      />
      <UsingTwoColumn
        title={<>Применение Фасадных панелей</>}
        subtitle={
          <>
            Фасадные термопанели из пенопласта с прочным полимерным покрытием формирует уникальный
            стиль здания. Материал прост в монтаже и повторит любые формы строения. Фасадная
            термопанель – это современный строительный материал с комплексным подходом к утеплению и
            облицовке фасадов, лоджий и балконов. Фасадные термопанели состоят из утеплителя,
            фиксирующего состава и декоративного слоя. В производстве используется только
            экологически чистое сырьё. Никаких загрязнений, химикатов и токсичных запахов. Внешнее
            покрытие изготовлено по технологии каменная печать. Это прочнейший слой натуральных
            минералов и эко-полимеров. Он не подвергается изменению под солнечных светом и
            перепадами температуры..
          </>
        }
        imageUrl={image1}
      />
      <Adventages
        title={<>Преимущества фасадных термопанелей</>}
        imageUrl="https://thumb.tildacdn.com/tild6333-3764-4339-a134-643162633032/-/resize/560x/-/format/webp/noroot.png"
      />
      <Collection subtitle={<></>} title={<>Коллекция фасадных термопанелей</>} collectionItems={termopanelCollection}/>
    </div>
  );
};
