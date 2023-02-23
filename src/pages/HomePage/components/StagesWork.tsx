import React from 'react';
import { setConsultationIsActive } from '../../../store/slices/consultation';
import { useDispatch } from 'react-redux';

type StagesWorkItemType = {
  imageUrl: string;
  title: JSX.Element;
  subtitle: JSX.Element;  
};




export const StagesWork: React.FC = () => {
  const dispatch = useDispatch()
  
  const stagesWorkItems: StagesWorkItemType[] = [
    {
      imageUrl: 'https://static.tildacdn.com/tild6432-3463-4963-b531-326365336466/01_1.svg',
      title: <>Оставляете заявку'</>,
      subtitle: <>Вы можете оставить <button onClick={(e) => {onOfferClick(); e.stopPropagation();}}>заявку</button> на сайте или позвонить по телефону <a href='tel:+79619751680'>+7 (961) 975 16-80</a></>,
    },
    {
      imageUrl: 'https://static.tildacdn.com/tild3665-3062-4864-b030-323563363537/02_1.svg',
      title: <>Общение с менеджером</>,
      subtitle:
        <>После оставленной заявки или размещения заказа с Вами обязательно свяжется менеджер для уточнений, возможной консультации и помощи в определении выбора необходимого материала.</>,
    },
    {
      imageUrl: 'https://static.tildacdn.com/tild3935-6634-4737-b763-613436343031/03_1.svg',
      title: <>Согласование и оформление</>,
      subtitle:
        <>После согласования всех необходимых нюансов, сроков изготовления, условий и даты доставки, при необходимости подписания договора, производим окончательное оформление Вашего заказа.</>,
    },
    {
      imageUrl: 'https://static.tildacdn.com/tild3430-6261-4037-b731-346637373365/04_1.svg',
      title: <>Оплата</>,
      subtitle: <>Оформленный заказ оплачивается удобным для Вас способом.</>,
    },
    {
      imageUrl: 'https://static.tildacdn.com/tild3363-3539-4335-b336-393637323364/05_1.svg',
      title: <>Производство</>,
      subtitle:
        <>После оплаты заказ размещается на производстве. Впоследствии заказ аккумулируется на складе, аккуратно и тщательно упаковывается и подготавливается для дальнейшей доставки или отправки через ТК по Вашему адресу.</>,
    },
    {
      imageUrl: 'https://static.tildacdn.com/tild3266-3561-4836-b961-366465346438/06_4.svg',
      title: <>Получение заказа</>,
      subtitle:
        <>При получении и подтверждении получения мы обязательно с Вами еще раз свяжемся, чтобы получить от Вас обратную связь и/или конструктивные предложения, которые мы обязательно постараемся учесть для дальнейшей взаимовыгодной работы. Потому что Вы ценны для нас, и мы очень стараемся, чтобы Ваши эмоции от нашей работы были только положительные!</>,
    },
  ];
  

  function onOfferClick(){
    dispatch(setConsultationIsActive(true))

  }
  return (
    <div className="stagesWork" onClick={() => onOfferClick()}>
      <div className="stagesWork__container _container">
        <h2 className="stagesWork__title">Этапы работы с нами</h2>
        <ul className="stagesWork__list">
          {stagesWorkItems.map((item, index) => {
            return (
              <li className="stagesWork__item stagesWorkItem" key={index}>
                <div className="stagesWorkItem__img">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="stagesWorkItem__content">
                  <div className="stagesWorkItem__title">{item.title}</div>
                  {<div className="stagesWorkItem__subtitle">{item.subtitle}</div>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

