import React from 'react';
import styles from '@/styles/FilterButtons.module.css';
import { useTranslation } from 'react-i18next';

const FilterButtons = function () {
  const { t } = useTranslation();
  return (
    <div className={styles.mainButton}>
      <button>{t('All')}</button>
      <button>{t('Completed')}</button>
      <button>{t('Active')}</button>
    </div>
  );
};

export default React.memo(FilterButtons);
