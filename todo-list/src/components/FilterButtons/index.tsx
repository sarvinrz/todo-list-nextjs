import React from 'react';
import styles from '@/styles/Home.module.css';
import { useTranslation } from 'react-i18next';

const FilterButtons = function () {
  const { t } = useTranslation();
  return (
    <main className={`${styles.main}`}>
      <div className='filter-buttons'>{t('button')}</div>
    </main>
  );
};

export default React.memo(FilterButtons);
