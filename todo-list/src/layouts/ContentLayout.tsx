import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import FilterButtons from '@/components/FilterButtons';
import { useTranslation } from 'react-i18next';
import InputFiled from '@/components/InputField';

export enum TodoFilterEnumType {
  CHECKED = 'CHECKED',
  UNCHECKED = 'UNCHECKED',
  ALL = 'ALL',
}

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = function ({ children }) {
  const { t } = useTranslation();

  const [selectedFilter, setSelectedFilter] = useState<TodoFilterEnumType>(
    TodoFilterEnumType.ALL
  );

  return (
    <>
      <main className={styles.main}>
        <div className={styles.layout}>
          <p>{t('to-do list')}</p>
          <FilterButtons
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <InputFiled selectedFilter={selectedFilter} />
        </div>
      </main>
    </>
  );
};

export default React.memo(MainLayout);
