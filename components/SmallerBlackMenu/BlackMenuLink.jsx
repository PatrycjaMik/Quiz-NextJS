import Link from 'next/link';
import { useState } from 'react';

import styles from './styles/BlackMenuLink.module.scss';

const BlackMenuLink = ({ text, link, color }) => {
  const [actualColor, setActualColor] = useState('#9d9d9d');

  const makeTextColor = (color) => {
    setActualColor(color);
  };
  return (
    <Link href={link} passHref>
      <a
        className={styles.MenuItem}
        onMouseOver={() => {
          makeTextColor(color);
        }}
        onMouseOut={() => {
          makeTextColor('#9d9d9d');
        }}
        style={{ color: actualColor }}
      >
        {text}
      </a>
    </Link>
  );
};

export default BlackMenuLink;
