import React from 'react';
import { Collection } from '../../components/Collection';
import { MainBlock } from '../../components/MainBlock';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';
import { UsuallyFlex } from '../../components/UsuallyFlex';

import { CollectionItemType } from '../../components/Collection';

const collectionItems: CollectionItemType[] = [
  {
    title: 'Коллекция Турино',
    subtitle: `1550 р/кв м на сетке<br/>>
    3050 р/кв м на пенополистироле 50 мм<br/>
    размер сетки 100 см на 120 см<br/>
    размер панели 105 см на 55 см<br/>
    Может быть выполнена со любой затиркой<br/>`,
    imageUrl: 'https://static.tildacdn.com/tild6131-6331-4930-b465-626133326361/IMG_1188.jpg',
  },
  {
    title: 'Коллекция Лофт',
    subtitle: `
    1550 р/кв м на сетке<br/>>
    3050 р/кв м на пенополистироле 50 мм<br/>
    размер сетки 100 см на 120 см<br/>
    размер панели 105 см на 55 см<br/>
    Может быть выполнена со любой затиркой<br/>`,
    imageUrl: 'https://static.tildacdn.com/tild3237-3137-4362-a162-373338616533/IMG_0929.jpg',
  },
  {
    title: 'Коллекция Классика',
    subtitle: `
    1550 р/кв м на сетке<br/>>
    3050 р/кв м на пенополистироле 50 мм<br/>
    размер сетки 100 см на 120 см<br/>
    размер панели 105 см на 55 см<br/>
    Может быть выполнена со любой затиркой<br/>`,
    imageUrl: 'https://static.tildacdn.com/tild3766-3666-4737-a265-653134363132/IMG_1127.jpg',
  },
  {
    title: 'Коллекция Нео',
    subtitle: `
    1550 р/кв м на сетке<br/>>
    3050 р/кв м на пенополистироле 50 мм<br/>
    размер сетки 100 см на 120 см<br/>
    размер панели 105 см на 55 см<br/>
    Может быть выполнена со любой затиркой<br/>`,
    imageUrl:
      'https://static.tildacdn.com/tild3335-3935-4533-b965-666137383534/PHOTO-2022-05-15-21-.jpg',
  },
];

export const FlexibleBrick = () => {
  return (
    <div className="flexibleBrick">
      <MainBlock
        bgImageUrl="https://thumb.tildacdn.com/tild3138-6238-4235-a135-383563346561/-/format/webp/10.jpg"
        title="<span>Гибкий кирпич</span> - строительный облицовочный материал, на основе мрамора и полимеров"
        subtitle=""
      />
      <UsingTwoColumn
        title={<>Применение гибкого кирпича</>}
        subtitle={
          <>
            <p>
              Известно несколько видов материала, из которого производится клинкерный кирпич. У всех
              этих материалов есть свои несомненные преимущества, и, конечно же, есть и минусы. Мы
              постарались совместить плюсы и избавиться от минусов.
            </p>
            <p>
              В состав клинкерного кирпича на основе гибкого камня входит и глина и полимеры,
              мраморная или кварцевая мука. Это придает нашей продукции оригинальный вид, высокую
              степень долговечности, а также невосприимчивость к внешним и атмосферным явлениям.
            </p>
            <p>
              Монтировать такой кирпич быстрее и дешевле. На сетке или на панели, используя обычные
              цементные смеси, при наличии некорректных по плоскости стен, на любом материале. ОСБ,
              пеноблок, неровно отштукатуренная стена - все подходит.
            </p>
          </>
        }
        imageUrl="https://thumb.tildacdn.com/tild3633-6233-4161-b830-643532663437/-/cover/532x418/center/center/-/format/webp/kirp_avstria-350x470.jpg"
      />
      <UsuallyFlex
        title={<>Технологии изготовления гибкого кирпича</>}
        subtitle={
          <>
            Кирпич изготавливается из полимерно-глиняной смеси с добавлением кварцевого песка,
            мраморной или гранитной крошки определенной фракции. Свою эластичность он берет от
            полимеров, окрас достигается глубокой реакцией между минеральными пигментами и самой
            крошкой, что не дает выцветания, а фактура – результат опрессовки. Клея для монтажа
            кирпичиков на поверхность панели из пенополистирола, сетки или любого другого основания
            изготавливаются строго по рецептуре и являются жидким составом теста самого кирпича. То
            есть при правильном склеивании превращается в однородную массу с самим кирпичиком. Не
            оторвать. Так мы работаем.
          </>
        }
        imageUrl="https://thumb.tildacdn.com/tild3234-3838-4137-a466-333661346163/-/format/webp/montaz_7.jpg"
      />
      
      <Collection title={<>Коллекция гибкого кирпича</>} collectionItems={collectionItems} />
    </div>
  );
};
