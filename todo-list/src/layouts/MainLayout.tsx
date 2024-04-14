import React from 'react';
import styles from '@/styles/Home.module.css';
import FilterButtons from '@/components/FilterButtons';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = function ({ children }) {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <p>todo list</p>
        </div>
        <FilterButtons />
      </main>
    </>
  );
};

export default React.memo(MainLayout);
