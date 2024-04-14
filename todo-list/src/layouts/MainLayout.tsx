import React from 'react';
import styles from '@/styles/Home.module.css';
import FilterButtons from '@/components/FilterButtons';
import { useTranslation } from 'react-i18next';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = function ({ children }) {
  const { t } = useTranslation();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.layout}>
          <p>{t('to-do list')}</p>
          <FilterButtons />
        </div>
      </main>
    </>
  );
};

export default React.memo(MainLayout);
