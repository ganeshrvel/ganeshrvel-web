import React, { ReactNode } from 'react';
import { Star, GitFork } from 'lucide-react';

export const ProgrammingLang = {
  ReactJS: 'React.js',
  Rust: 'Rust',
  JavaScript: 'JavaScript',
  Flutter: 'Flutter',
  Dart: 'Dart',
  ElectronJS: 'Electron.js',
  Go: 'Go',
  C: 'C',
} as const;

export type ProgrammingLangType =
  (typeof ProgrammingLang)[keyof typeof ProgrammingLang];

export interface PortfolioCardProps {
  href: string;
  title: string;
  description: string;
  secondaryDescription?: ReactNode[];
  programmingLanguages: ProgrammingLangType[];
  githubStars?: string | null;
  forkCount?: string | null;
}

export const languageColors: Record<ProgrammingLangType, string> = {
  [ProgrammingLang.Rust]: 'bg-[#C83D00] text-white',
  [ProgrammingLang.Go]: 'bg-[#00ACD7] text-black',
  [ProgrammingLang.Flutter]: 'bg-[#54C5F8] text-black',
  [ProgrammingLang.Dart]: 'bg-[#03589c] text-white',
  [ProgrammingLang.JavaScript]: 'bg-[#f7e018] text-black',
  [ProgrammingLang.ReactJS]: 'bg-[#58c4dc] text-black',
  [ProgrammingLang.ElectronJS]: 'bg-[#323540] text-white',
  [ProgrammingLang.C]: 'bg-[#A8B9CC] text-black',
};

const LanguageBubble: React.FC<{ lang: ProgrammingLangType }> = ({ lang }) => (
  <span
    key={lang}
    className={`text-[12px] inline-flex items-center font-bold leading-sm px-1.5 rounded-lg ${languageColors[lang]}`}
  >
    {lang}
  </span>
);

export default function PortfolioCard(props: PortfolioCardProps) {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer'
      className='flex flex-col py-4 px-5 bg-white dark:bg-black/20 rounded-xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-gray-500/20 transition duration-500 border dark:border-slate-800 h-full'
    >
      <div className='flex flex-col justify-center mt-[-1px] flex-grow'>
        <div className='mb-1 text-1xl font-bold truncate'>{props.title}</div>
        <div className='text-gray-700 dark:text-gray-200/90 text-xs leading-tight'>
          {props.description}
        </div>
        {props.secondaryDescription && (
          <ul className='list-disc list-inside text-[#7c858c] text-xs mt-2 mb-0 space-y-1'>
            {props.secondaryDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <div className='flex flex-wrap gap-1.5 mt-4 opacity-90'>
          {props.programmingLanguages.map((lang) => (
            <LanguageBubble
              key={lang}
              lang={lang}
            />
          ))}
        </div>
        {(props.githubStars || props.forkCount) && (
          <div className='flex items-center mt-auto pt-4 text-xs gap-3'>
            {props.githubStars && (
              <div className='flex items-center'>
                <Star size={14} />
                <span className='ml-1'>{props.githubStars}</span>
              </div>
            )}
            {props.forkCount && (
              <div className='flex items-center'>
                <GitFork size={14} />
                <span className='ml-1'>{props.forkCount}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </a>
  );
}
