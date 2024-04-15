import React, { useEffect, useState } from 'react';
import styles from './FilterButtons.module.css';
import { useTranslation } from 'react-i18next';
import { LuArchiveRestore, LuLayoutTemplate } from 'react-icons/lu';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { TodoFilterEnumType } from '@/layouts/ContentLayout';

interface FilterButtonsProps {
  selectedFilter: TodoFilterEnumType;
  setSelectedFilter: React.Dispatch<React.SetStateAction<TodoFilterEnumType>>;
}

const FilterButtons: React.FC<FilterButtonsProps> = function ({
  selectedFilter,
  setSelectedFilter,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.mainButton}>
      <button
        disabled={selectedFilter === TodoFilterEnumType.ALL}
        onClick={() => setSelectedFilter(TodoFilterEnumType.ALL)}
      >
        <LuLayoutTemplate fontSize={18} />
        {t('All')}
      </button>
      <button
        disabled={selectedFilter === TodoFilterEnumType.UNCHECKED}
        onClick={() => setSelectedFilter(TodoFilterEnumType.UNCHECKED)}
      >
        <IoCheckmarkDoneSharp fontSize={18} />
        {t('Active')}
      </button>
      <button
        disabled={selectedFilter === TodoFilterEnumType.CHECKED}
        onClick={() => setSelectedFilter(TodoFilterEnumType.CHECKED)}
      >
        <LuArchiveRestore fontSize={18} />
        {t('Completed')}
      </button>
    </div>
  );
};

export default React.memo(FilterButtons);
