import React from 'react';
import { useAppSelector } from '../store/store';
import { setConsultationIsActive } from '../store/slices/consultation';
import { useDispatch } from 'react-redux';
import emailjs from 'emailjs-com';
import bgImage2 from '../assets/image/Components/bgImage2.jpg';

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
  function onClickSubmit(e: any) {
    const kirillic: string = 'йцукенгшщзхъэждлорпавыфячсмитьбюё';
    const numbers: string = '1234567890+';

    e.preventDefault();

    function nameFun(): false | void {
      // для имени
      if (nameInput.length < 1) {
        setNameInputError('Пустое поле');
        return false;
      }
      if (nameInput.length < 2) {
        setNameInputError('Минимальное кол-во 2 символа');
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
      if (phoneInput.length < 2) {
        setPhoneInputError('Минимальное кол-во 2 символа');
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
          dispatch(setConsultationIsActive(false));
        }
      }
    }
    nameFun();
    phoneFun();

    if (nameFun() !== false && phoneFun() !== false) {
      emailjs
        .sendForm('service_yoh8d1r', 'template_2yzkp8s', e.target, 'jgqOCV-usNckNIGw2')
        .then((res) => alert(`статус ${res.status}, отправка успешна!`))
        .catch((err) => alert(`статус ${err.status}, отправка не удалась!`));
      alert('Данные отправлены');
      setNameInput('');
      setPhoneInput('');
    }
  }

  return (
    <div className={consultationIsActive ? 'consultation active' : 'consultation'}>
      <div className="consultation__container _container" onClick={(e) => e.stopPropagation()}>
        <div
          className="consultation__burger-menu"
          onClick={() => dispatch(setConsultationIsActive(false))}></div>
        <div className="consultation__img">
          <img src={bgImage2} alt="" />
        </div>
        <form
          className="consultation__content"
          onSubmit={(e) => onClickSubmit(e)}
          onKeyDown={(e) => {
            e.key === 'Enter' && onClickSubmit(e);
          }}>
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
                name="user_name"
                value={nameInput}
                onFocus={() => {
                  setNameInputAviableIsTrue(true);
                }}
                onBlur={() => setNameInputAviableIsTrue(false)}
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
                name="user_phone"
                value={phoneInput}
                onFocus={() => setPhoneInputAviableIsTrue(true)}
                onBlur={() => setPhoneInputAviableIsTrue(false)}
              />
            </div>
          </div>
          <button className="consultation__btn" type="submit">
            Отправить
          </button>
          <p className="consultation__text">Все ваши данные останутся конфиденциальными</p>
        </form>
      </div>
    </div>
  );
};
