import Link from 'next/link';
import burger from '../../public/assets/submenu/burger.png';
import closeWhite from '../../public/assets/submenu/closeButtonWhite.png';
import equal from '../../public/assets/submenu/equalizer.svg';
import { useState } from 'react';

import styles from './styles/SmallerBlackMenu.module.scss';

import BlackMenuLink from './BlackMenuLink';
import menuLinks from './tools/menuLinks';
import submenuLinks from './tools/submenuLinks';

const SmallerBlackMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className={styles.BlackMenu}>
      <div className={styles.BlackMenuMobileControls}>
        <div
          className={styles.BlackMenuEquaalizer}
          style={{
            backgroundImage: `url(${
              !openBurger ? burger.src : closeWhite.src
            })`,
            width: `${!openBurger ? '1.625rem' : '1.2rem'}`,
            height: `${!openBurger ? '1.625rem' : '1.2rem'}`,
            paddingLeft: `${!openBurger ? '1rem' : '1.6rem'}`,
          }}
          onClick={() => {
            setOpenBurger(!openBurger);
            if (openBurger) {
              setActiveMenu(false);
            }
          }}
        ></div>
        <Link href='https://polskieradio.pl' passHref>
          <a className={styles.BlackMenuLogoMobileContainer}>
            <img
              src='https://www.polskieradio.pl/style/responsive2/_img/radio-logo.png'
              className={styles.BlackMenuLogoMobile}
              alt='mobile-logo'
            />
          </a>
        </Link>
        <Link href='https://player.polskieradio.pl/' passHref>
          <div
            className={styles.BlackMenuEquaalizer}
            style={{ backgroundImage: `url(${equal.src})` }}
          ></div>
        </Link>
      </div>
      <div
        className={`${styles.BlackMenuContainer} ${
          openBurger ? styles.burgerOpen : ''
        }`}
      >
        <a href='https://polskieradio.pl'>
          <img
            src='https://www.polskieradio.pl/style/responsive2/_img/radio-logo.png'
            className={styles.BlackMenuLogo}
            alt='logo'
          />
        </a>
        <div className={styles.BlackMenuListContainer}>
          <ul className={styles.BlackMenuList}>
            {menuLinks &&
              menuLinks.map((x, index) => {
                return (
                  <li key={`menulink__${index}`}>
                    <BlackMenuLink
                      text={x.name}
                      link={x.link}
                      color={x.color}
                    />
                  </li>
                );
              })}

            <div
              className={styles.BlackMenuMobileArrow}
              style={{
                transform: `rotate(${activeMenu ? '-135deg' : '45deg'})`,
              }}
              onClick={() => {
                setActiveMenu(!activeMenu);
              }}
            ></div>
          </ul>
        </div>
        <div className={styles.BlackMenuRightColumn}>
          <div
            className={styles.BlackMenuarrow}
            style={{ transform: `rotate(${activeMenu ? '135deg' : '-45deg'})` }}
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          ></div>
          <Link href='https://player.polskieradio.pl/' passHref>
            <a target='_blank'>
              <div
                className={styles.BlackMenuEquaalizer}
                style={{ backgroundImage: `url(${equal.src})` }}
              ></div>
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.BlackMenuSubmenu} ${
          activeMenu ? styles.subMenuOpened : ''
        }`}
      >
        <div className={styles.BlackMenuSubmenuContainer}>
          <div
            className={styles.BlackMenuSubmenuCloseButton}
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <div className={styles.BlackMenuSubmenuCloseButtonLeft}></div>
            <div className={styles.BlackMenuSubmenuCloseButtonRight}></div>
          </div>
          {submenuLinks &&
            submenuLinks.map((x, index) => {
              return (
                <div
                  className={styles.BlackMenuSubmenuElement}
                  key={`submenuItem__${index}`}
                >
                  <Link href={x.link} passHref>
                    <a>
                      <div
                        className={styles.BlackMenuSubmenuElementLogo}
                        style={{ backgroundImage: `url(${x.image})` }}
                      ></div>
                      <p>{x.name}</p>
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SmallerBlackMenu;
