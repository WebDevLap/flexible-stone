import {useState} from 'react';
import { FullCollection } from './components/FullCollection';
import { useDispatch } from 'react-redux';

export type CollectionItemType = {
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
};

type CollectionType = {
  collectionItems: CollectionItemType[];
  title: JSX.Element;
  subtitle: JSX.Element;
};

export const Collection: React.FC<CollectionType> = ({ collectionItems, title, subtitle }) => {
  const dispatch = useDispatch();
  const [fullCollectionIsActive, setFullCollectionIsActive] = useState<boolean>(false)
  const [fullCollectionActiveImg, setFullCollectionActiveImg] = useState<string>('')
  return (
    <section className="collection">
      <div className="collection__container _container">
        <h2 className="collection__title">{title}</h2>
        <p className="collection__subtitle">{subtitle}</p>
        <FullCollection fullCollectionActiveImg={fullCollectionActiveImg} setFullCollectionActiveImg={setFullCollectionActiveImg} fullCollectionIsActive={fullCollectionIsActive} setFullCollectionIsActive={setFullCollectionIsActive}/>
        <ul className="collection__list">
          {collectionItems.map((item, index) => {
            return (
              <li className="collection__item" key={index}>
                <div
                  className="collection-item__img"
                  onClick={() => {
                    setFullCollectionIsActive(true);
                    setFullCollectionActiveImg(item.imageUrl);
                  }}>
                  <img src={item.imageUrl} alt="" />
                </div>
                {item.imageUrl2 !== '' ? (
                  <div
                    className="collection-item__img"
                    onClick={() => {
                      setFullCollectionIsActive(true);
                      setFullCollectionActiveImg(item.imageUrl2);
                    }}>
                    <img src={item.imageUrl2} alt="" />
                  </div>
                ) : (
                  <></>
                )}
                {item.imageUrl3 !== '' ? (
                  <div
                    className="collection-item__img"
                    onClick={() => {
                      setFullCollectionIsActive(true);
                      setFullCollectionActiveImg(item.imageUrl2);
                    }}>
                    <img src={item.imageUrl3} alt="" />
                  </div>
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
