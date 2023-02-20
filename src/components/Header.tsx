import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItemType = {
  item: string;
  link: string;
}
const NavItems: NavItemType[] = [
  { item: 'Главная', link: '/' },
  { item: 'Гибкий кирпич', link: '/flexibleStone/' },
  { item: 'Гибкая плитка', link: '/flexibleTile/' },
  { item: 'Фасадные термопанели', link: '/facadeTermelPanels/' },
  { item: 'О нас', link: '/AboutUs/' },
];


export const Header: React.FC = () => {
  const [burgerActive, setBurgerActive] = React.useState<boolean>(false)
  const burgerMenuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if(burgerActive){
      document.body.classList.add('hidden')
    } else{
      document.body.classList.remove('hidden')
    }
    
  }, [burgerActive])
  

  React.useEffect(() => {
    function handleBodyClick(e: MouseEvent){
      setBurgerActive(false);
    }
    document.body.addEventListener('click', (e: any) => handleBodyClick(e))

    return (
      document.body.removeEventListener('click', (e: any) => handleBodyClick(e))
    )
  }, [])


  return (
    <header className="header">
      <div className="header__container _container">
        <NavLink className="header__logo" to='/'>
          {/* <img src="" alt="logo" /> */}
        </NavLink>
        <div className={burgerActive ? "burger-menu active" :"burger-menu"} onClick={(e) => {setBurgerActive(!burgerActive); e.stopPropagation()}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={burgerActive ? "header__nav active" : "header__nav"} ref={burgerMenuRef} onClick={(e) => e.stopPropagation()}>
          <ul className="header-nav__list">
            {NavItems.map((item, index) => {
              return (
                <li className="header-nav__item" onClick={() => setBurgerActive(false)} key={index}>
                  <NavLink to={item.link} className="header-nav__link">{item.item}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
