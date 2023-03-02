import React from 'react';

type FullCollectionProps = {
  fullCollectionIsActive: boolean;
  setFullCollectionIsActive: (isActive: boolean) => void;
  fullCollectionActiveImg: string;
  setFullCollectionActiveImg: (imageUrl: string) => void;
};

export const FullCollection: React.FC<FullCollectionProps> = ({
  fullCollectionIsActive,
  setFullCollectionIsActive,
  fullCollectionActiveImg,
  setFullCollectionActiveImg,
}) => {

  React.useEffect(() => {
    fullCollectionIsActive
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden');
  }, [fullCollectionIsActive]);

  return (
    <div className={fullCollectionIsActive ? 'fullCollection active' : 'fullCollection'}>
      <div className="fullCollection__container _container">
        <div className="fullCollection__img">
          <div
            className="fullCollection__cross"
            onClick={() => setFullCollectionIsActive(false)}></div>
          <img src={fullCollectionActiveImg} alt="" />
        </div>
      </div>
    </div>
  );
};
