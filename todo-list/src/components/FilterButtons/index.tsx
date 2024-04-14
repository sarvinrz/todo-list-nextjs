import React from 'react';
import styles from './FilterButtons.module.css';
import { useTranslation } from 'react-i18next';
import { LuArchiveRestore, LuLayoutTemplate } from 'react-icons/lu';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const FilterButtons = function () {
  const { t } = useTranslation();
  return (
    <div className={styles.mainButton}>
      <button>
        <LuLayoutTemplate fontSize={18} />
        {t('All')}
      </button>
      <button>
        <IoCheckmarkDoneSharp fontSize={18} />
        {t('Active')}
      </button>
      <button>
        <LuArchiveRestore fontSize={18} />
        {t('Completed')}
      </button>
    </div>
  );
};

export default React.memo(FilterButtons);
