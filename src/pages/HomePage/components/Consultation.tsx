import React from 'react';
import { useAppSelector } from '../../../store/store';
import { setConsultationIsActive } from '../../../store/slices/consultation';
import { useDispatch } from 'react-redux';

export const Consultation = () => {
  const consultationIsActive = useAppSelector((state) => state.consultation.consultationIsActive);
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = React.useState<string>('');
  const [nameInputError, setNameInputError] = React.useState<string>('');
  const [nameInputAviable, setNameInputAviable] = React.useState<number>(20);
  const [nameInputAviableIsTrue, setNameInputAviableIsTrue] = React.useState<boolean>(false);

  const [phoneInput, setPhoneInput] = React.useState<string>('');
  const [phoneInputError, setPhoneInputError] = React.useState<string>('');
  const [phoneInputAviable, setPhoneInputAviable] = React.useState<number>(20);
  const [phoneInputAviableIsTrue, setPhoneInputAviableIsTrue] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (consultationIsActive) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [consultationIsActive]);

  React.useEffect(() => {
    function HandlerClickOnBody() {
      dispatch(setConsultationIsActive(false));
    }

    document.body.addEventListener('click', () => HandlerClickOnBody());

    return document.body.removeEventListener('click', () => HandlerClickOnBody());
  }, []);

  function onNameInputChange(e: any) {
    if (e.target.value.length > 20) return;
    setNameInput(e.target.value);
    setNameInputAviable(20 - e.target.value.length);
  }
  function onPhoneInputChange(e: any) {
    if (e.target.value.length > 20) return;
    setPhoneInput(e.target.value);
    setPhoneInputAviable(20 - e.target.value.length);
  }
  function onClickSubmit() {
    const kirillic: string = 'йцукенгшщзхъэждлорпавыфячсмитьбюё';
    const numbers: string = '1234567890+';

    function nameFun(): false | void {
      // для имени
      if (nameInput.length < 1) {
        setNameInputError('Пустое поле');
        return false;
      }
      for (let i = 0; i < nameInput.length; i++) {
        if (!kirillic.includes(String(nameInput[i].toLowerCase()))) {
          setNameInputError('Буквы должны быть кириллическими и должны состоять только из букв');
          return false;
        } else {
          setNameInputError('');
        }
      }
    }

    function phoneFun(): false | void {
      // для телефона
      if (phoneInput.length < 1) {
        setPhoneInputError('Пустое поле');
        return false;
      }

      for (let i = 0; i < phoneInput.length; i++) {
        if (!numbers.split('').includes(String(phoneInput[i].toLowerCase()))) {
          setPhoneInputError('Поле должно состоять только из цифр или знака "+"');
          return false;
        } else if (i > 0) {
          if (phoneInput.substring(1).includes('+')) {
            setPhoneInputError('Знак "+" должен стоять только в начале');
            return false;
          }
        } else {
          setPhoneInputError('');
        }
      }
    }
    if (nameFun() === false && phoneFun() === false) {
    }
  }

  return (
    <div className={consultationIsActive ? 'consultation active' : 'consultation'}>
      <div className="consultation__container _container" onClick={(e) => e.stopPropagation()}>
        <div
          className="consultation__burger-menu"
          onClick={() => dispatch(setConsultationIsActive(false))}></div>
        <div className="consultation__img">
          <img
            src="https://thumb.tildacdn.com/tild3764-3136-4835-b836-333638653032/-/format/webp/_6.jpg"
            alt=""
          />
        </div>
        <div className="consultation__content">
          <h2 className="consultation__title">Заполните необходимые поля</h2>
          <p className="consultation__subtitle">
            Наш специалист свяжется с вами в самое ближайшее время
          </p>
          <div className="consultation__input-area">
            <h3 className="input-area__title">Ваше имя</h3>
            <div className="input-area__border">
              <div className="input-area__error">{nameInputError}</div>
              <div
                className={
                  nameInputAviableIsTrue ? 'input-area__aviable active' : 'input-area__aviable'
                }>
                доступно еще <span>{nameInputAviable}</span> символов
              </div>
              <input
                onChange={(e) => {
                  onNameInputChange(e);
                  setNameInputError('');
                }}
                type="text"
                className="input-area__input"
                placeholder="Имя: "
                value={nameInput}
                onFocus={() => {
                  setNameInputAviableIsTrue(true);
                }}
                onBlur={() => setNameInputAviableIsTrue(false)}
                onKeyDown={(e) => {
                  e.key === 'Enter' && onClickSubmit();
                }}
              />
            </div>
          </div>
          <div className="consultation__input-area">
            <h3 className="input-area__title">Ваш телефон</h3>
            <div className="input-area__border">
              <div className="input-area__error">{phoneInputError}</div>
              <div
                className={
                  phoneInputAviableIsTrue ? 'input-area__aviable active' : 'input-area__aviable'
                }>
                Доступно еще <span>{phoneInputAviable}</span> символов
              </div>
              <input
                onChange={(e) => {
                  onPhoneInputChange(e);
                  setPhoneInputError('');
                }}
                type="text"
                className="input-area__input"
                placeholder="Номер: "
                value={phoneInput}
                onFocus={() => setPhoneInputAviableIsTrue(true)}
                onBlur={() => setPhoneInputAviableIsTrue(false)}
                onKeyDown={(e) => {
                  e.key === 'Enter' && onClickSubmit();
                }}
              />
            </div>
          </div>
          <button className="consultation__btn" onClick={() => onClickSubmit()}>
            Отправить
          </button>
          <p className="consultation__text">Все ваши данные останутся конфиденциальными</p>
        </div>
      </div>
    </div>
  );
};
