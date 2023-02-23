import { Adventages } from '../../components/Adventages';
import { Collection } from '../../components/Collection';
import { MainBlock } from '../../components/MainBlock';
import { Using } from '../../components/Using';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';

type CollectionItem = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const collectionItems: CollectionItem[] = [
  {
    title: 'Коллекция тихий шторм',
    subtitle: `3050 р/кв м на пенополистироле 50 мм<br/>
    (возможно выполнение на 30 мм и 100 мм)<br/>
    размер сетки 100 см на 120 см<br/>
    размер панели 105 см на 55 см<br/>
    Может быть выполнена со любой затиркой<br/>`,
    imageUrl: 'https://static.tildacdn.com/tild3638-3662-4937-b265-663030376163/IMG_1264.jpg',
  },
  {
    title: 'Коллекция Елена',
    subtitle: `3050 р/кв м на пенополистироле 50 мм<br/>
    (возможно выполнение на 30 мм и 100 мм)<br/>
    размер сетки 100 см на 120 см<br/>
    размер панели 105 см на 55 см<br/>
    Может быть выполнена со любой затиркой<br/>`,
    imageUrl: 'https://static.tildacdn.com/tild3633-3563-4066-b339-383530363632/IMG_1344.jpg',
  },
  {
    title: 'Коллекция Газгольдер',
    subtitle: `3050 р/кв м на пенополистироле 50 мм 
    (возможно выполнение на 30 мм и 100 мм)
    размер сетки 100 см на 120 см
    размер панели 105 см на 55 см
    Может быть выполнена со любой затиркой`,
    imageUrl:
      'https://thumb.tildacdn.com/tild3436-3561-4531-b765-613262396265/-/cover/460x340/center/center/-/format/webp/PHOTO-2022-05-15-21-.jpg',
  },
];

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
        imageUrl="https://static.tildacdn.com/tild3035-3537-4134-b537-316465633037/72a7ee43-26c4-4915-a.jpg"
      />
      <Adventages
        title={<>Преимущества фасадных термопанелей</>}
        imageUrl="https://thumb.tildacdn.com/tild6333-3764-4339-a134-643162633032/-/resize/560x/-/format/webp/noroot.png"
      />
      <Collection
        collectionItems={collectionItems}
        title={<>Коллекция гибкого кирпича на панелях</>}
      />
    </div>
  );
};
