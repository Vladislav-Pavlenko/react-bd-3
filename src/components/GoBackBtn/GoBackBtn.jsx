import { Link, useLocation } from 'react-router-dom';
import styles from './GoBackBtn.module.css';
import { useRef } from 'react';

export const GoBackBtn = () => {
  const location = useLocation();
  const goBackLink = useRef(location.state ?? '/');
  return (
    <Link to={goBackLink.current} className={styles.link}>
      Go back
    </Link>
  );
};
