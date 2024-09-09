import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import {
  languageColors,
  ProgrammingLangType,
} from '@/app/components/Body/PortfolioCard';

interface LanguageFilterProps {
  languages: ProgrammingLangType[];
  selectedLanguage: ProgrammingLangType | null;
  onFilterChange: (lang: ProgrammingLangType | null) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
  languages,
  selectedLanguage,
  onFilterChange,
}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleLanguageClick = (lang: ProgrammingLangType) => {
    onFilterChange(selectedLanguage === lang ? null : lang);
  };

  const toggleFilterVisibility = () => {
    onFilterChange(null);
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className='mt-8'>
      <button
        onClick={toggleFilterVisibility}
        className='flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors duration-200'
      >
        Filter by Language
        <span className='ml-1 transition-transform duration-200 ease-in-out'>
          {isFilterVisible ? (
            <ChevronUp
              size={16}
              className='transform rotate-0'
            />
          ) : (
            <ChevronDown
              size={16}
              className='transform rotate-0'
            />
          )}
        </span>
      </button>
      <div
        className={`pl-3 overflow-hidden transition-all duration-300 ease-in-out ${
          isFilterVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-wrap gap-2 mt-2'>
          {languages.map((lang) => {
            const selectedColor = languageColors[lang];

            return (
              <button
                key={lang}
                onClick={() => handleLanguageClick(lang)}
                className={`px-3 py-0.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out transform ${
                  selectedLanguage === lang
                    ? `${selectedColor} scale-105`
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105'
                }`}
              >
                {lang}
              </button>
            );
          })}
          {selectedLanguage && (
            <button
              onClick={() => onFilterChange(null)}
              className='px-3 py-0.5 rounded-full text-sm font-medium ease-in-out flex items-center'
            >
              Clear Filter
              <X
                size={14}
                className='ml-1'
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageFilter;
