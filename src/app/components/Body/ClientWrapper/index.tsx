'use client';

import React, { useState, useEffect } from 'react';
import {
  ProgrammingLang,
  ProgrammingLangType,
} from '@/app/components/Body/PortfolioCard';
import styles from '@/app/components/Body/ClientWrapper/index.module.css';
import LanguageFilter from '@/app/components/Body/LanguageFilter';
import Masonry from 'react-masonry-css';

interface ClientWrapperProps {
  children: React.ReactNode;
  allLanguages: ProgrammingLangType[];
}

export default function ClientWrapper({
  children,
  allLanguages,
}: ClientWrapperProps) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<ProgrammingLangType | null>(null);

  const breakpointColumnsObj = {
    default: 3,
    1280: 3, // xl
    1024: 2, // lg
    768: 2, // md
    640: 1, // sm
  };

  useEffect(() => {
    const cards = document.querySelectorAll('[data-languages]');

    cards.forEach((card) => {
      const languages = JSON.parse(card.getAttribute('data-languages') || '[]');
      const shouldShow =
        selectedLanguage === null || languages.includes(selectedLanguage);

      const element = card as HTMLElement;
      element.style.display = shouldShow ? '' : 'none';
    });
  }, [selectedLanguage]);

  return (
    <>
      <LanguageFilter
        languages={allLanguages.filter(
          (a) =>
            a !== ProgrammingLang.ReactJS && a !== ProgrammingLang.ElectronJS
        )}
        selectedLanguage={selectedLanguage}
        onFilterChange={setSelectedLanguage}
      />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const languages = JSON.parse(child.props['data-languages'] || '[]');
            const shouldShow =
              selectedLanguage === null || languages.includes(selectedLanguage);
            return shouldShow ? <div className='mt-4'>{child}</div> : null;
          }
          return null;
        })}
      </Masonry>
    </>
  );
}
