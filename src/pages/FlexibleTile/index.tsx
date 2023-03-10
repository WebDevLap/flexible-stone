import React from 'react';
import { Adventages } from '../../components/Adventages';
import { Collection } from '../../components/Collection';
import { MainBlock } from '../../components/MainBlock';
import { UsingTwoColumn } from '../../components/UsingTwoColumn';
import { UsuallyFlex } from '../../components/UsuallyFlex';


export const FlexibleTile = () => {
  return (
    <div className="flexibleTile">
      <MainBlock
        title="<span>Гибкая плитка под камень</span>
- уникальная технология на основе мрамора и спокойных полимеров"
        subtitle=""
        bgImageUrl="https://thumb.tildacdn.com/tild6366-3538-4634-a432-646635653139/-/format/webp/krasivyj-gibkij-kame.jpg"
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
        imageUrl="https://static.tildacdn.com/tild3037-6439-4133-a435-306634613038/IMG_1556.jpg"
      />
      <UsingTwoColumn
        title={<>Гибкие панели под кирпич-отличное решение</>}
        subtitle={
          <>
            Современное строительство и ремонт реально ушли далеко в сторону применения новых
            материалов и способов декорирования пространств. Другое дело, что ценник этих новинок
            часто бывает недостаточно обоснован, мягко скажем. Изделия на основе мраморно полимерной
            смеси, благодаря натуральным материалам и технологии самой природы, воссозданной в
            лаборатории- приятно удивляют низкими затратами. Что реально отражается и на их цене.
          </>
        }
        imageUrl="https://static.tildacdn.com/tild3032-6537-4161-a135-613465373330/IMG_1510.jpg"
      />
      <UsuallyFlex
        title={<></>}
        subtitle={
          <>
            Коллекции кирпича на гибкой основе создаются на основе коллекций гибкого клинкера. Сама
            подложка выполнена из той же мраморно-полимерной смеси. Идеально подходит и для кухонь,
            присутственных мест квартиры, офиса, балконов и оранжерей, кабинетов и парадных. Все для
            фантазии дизайнера. Клеится на любую поверхность. Быстро и без строительной пыли и
            грязи.
          </>
        }
        imageUrl="https://thumb.tildacdn.com/tild3632-3634-4030-b466-336264343232/-/resize/465x/-/format/webp/IMG_1514.jpg"
      />
      <Adventages
        title={<>Преимущества Гибкой Плитки</>}
        imageUrl="https://thumb.tildacdn.com/tild3264-3966-4338-b731-386139613132/-/resize/560x/-/format/webp/981_original.jpg"
      />
    </div>
  );
};
