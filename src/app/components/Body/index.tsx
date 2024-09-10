import PortfolioCard, {
  ProgrammingLang,
  ProgrammingLangType,
} from '@/app/components/Body/PortfolioCard';
import { GITHUB_USERNAME } from '@/app/const';
import React, { ReactNode } from 'react';
import { ALink } from '@/app/components/Body/ALink';
import { prepareGitHubRepoData } from '@/app/api/portfolio';
import ClientWrapper from '@/app/components/Body/ClientWrapper';

function buildGithubRepo(slug: string) {
  return `https://github.com/${GITHUB_USERNAME}/${slug}`;
}

interface PortfolioRepoInfo {
  slug: string;
  override?: {
    name?: string;
    description?: string;
    stargazers_count?: number;
    forks_count?: number;
    html_url?: string;
  };
}

interface PortfolioCardInfo {
  secondaryDescription?: ReactNode[];
  programmingLanguages: ProgrammingLangType[];
}

const portfolioRepoInfo: Record<string, PortfolioRepoInfo & PortfolioCardInfo> =
  {
    openmtp: {
      slug: 'openmtp',
      secondaryDescription: [
        <>
          inputmag.com - &quot;There&apos;s finally an alternative to
          Google&apos;s horrible Android File Transfer app&quot;
        </>,
        <>
          XDA Developers - &quot;OpenMTP, an Android File Transfer alternative
          for macOS, gains Samsung device support and a dark theme&quot;
        </>,
      ],
      programmingLanguages: [
        ProgrammingLang.JavaScript,
        ProgrammingLang.ReactJS,
        ProgrammingLang.ElectronJS,
        ProgrammingLang.Go,
        ProgrammingLang.C,
      ],
      override: {
        name: 'OpenMTP',
      },
    },
    flutter_mobx_dio_boilerplate: {
      slug: 'flutter_mobx_dio_boilerplate',
      programmingLanguages: [
        ProgrammingLang.JavaScript,
        ProgrammingLang.ElectronJS,
      ],
      override: {
        name: 'Flutter Mobx Dio Boilerplate',
      },
    },
    [`mtp-rs`]: {
      slug: 'mtp-rs',
      programmingLanguages: [ProgrammingLang.Rust],
      override: {
        name: 'mtp-rs',
        description: `A unique pure Rust implementation of the Media Transfer Protocol (MTP). As the only complete MTP protocol in Rust, it delivers superior performance and fixes numerous bugs present in other language implementations, ensuring reliable and efficient communication with MTP-enabled devices like smartphones, cameras, and music players.`,
      },
    },
    [`sirius-proxima`]: {
      slug: 'sirius-proxima',
      programmingLanguages: [ProgrammingLang.Rust],
      override: {
        name: 'Sirius Proxima',
      },
    },
    [`sirius-alpha`]: {
      slug: 'sirius-alpha',
      programmingLanguages: [ProgrammingLang.Rust],
      override: {
        name: 'Sirius Alpha',
      },
    },
    [`sirius-hydra`]: {
      slug: 'sirius-hydra',
      programmingLanguages: [ProgrammingLang.Rust],
      override: {
        name: 'Sirius Hydra',
      },
    },
    [`npm-electron-root-path`]: {
      slug: 'npm-electron-root-path',
      programmingLanguages: [
        ProgrammingLang.JavaScript,
        ProgrammingLang.ElectronJS,
      ],
      override: {
        name: 'electron-root-path',
      },
    },
    [`pub-rules`]: {
      slug: 'pub-rules',
      programmingLanguages: [ProgrammingLang.Flutter, ProgrammingLang.Dart],
      override: {
        name: 'Rules',
      },
    },
    [`pub-scaff`]: {
      slug: 'pub-scaff',
      programmingLanguages: [ProgrammingLang.Flutter, ProgrammingLang.Dart],
      override: {
        name: 'Scaff',
      },
    },
    [`squash_archiver`]: {
      slug: 'squash_archiver',
      programmingLanguages: [
        ProgrammingLang.Flutter,
        ProgrammingLang.Dart,
        ProgrammingLang.Go,
        ProgrammingLang.C,
      ],
      override: {
        name: 'Squash Archiver - Desktop App',
      },
    },
    [`npm-electron-is-packaged`]: {
      slug: 'npm-electron-is-packaged',
      programmingLanguages: [
        ProgrammingLang.JavaScript,
        ProgrammingLang.ElectronJS,
      ],
      override: {
        name: 'electron-is-packaged',
      },
    },
    [`one-archiver`]: {
      slug: 'one-archiver',
      programmingLanguages: [ProgrammingLang.Go],
      override: {
        name: 'One Archiver',
      },
    },
    [`npm-electron-main-window`]: {
      slug: 'npm-electron-main-window',
      programmingLanguages: [
        ProgrammingLang.JavaScript,
        ProgrammingLang.ElectronJS,
      ],
      override: {
        name: 'electron-main-window',
      },
    },
    [`quant`]: {
      slug: 'quant-scrubbed',
      programmingLanguages: [ProgrammingLang.Rust],
      override: {
        name: 'Quant',
      },
    },
    [`electron-react-redux-advanced-boilerplate`]: {
      slug: 'electron-react-redux-advanced-boilerplate',
      programmingLanguages: [
        ProgrammingLang.JavaScript,
        ProgrammingLang.ElectronJS,
      ],
      override: {
        name: 'Electron React Redux Advanced Boilerplate',
      },
    },
    [`go-mtpx`]: {
      slug: 'go-mtpx',
      programmingLanguages: [ProgrammingLang.Go, ProgrammingLang.C],
      override: {
        name: 'MTPx',
      },
    },
    [`pub-data-channel`]: {
      slug: 'pub-data-channel',
      programmingLanguages: [ProgrammingLang.Flutter, ProgrammingLang.Dart],
      override: {
        name: 'Data Channel',
      },
    },
  };

export interface PortfolioRepo extends PortfolioCardInfo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

type PortfolioData = {
  [K in keyof typeof portfolioRepoInfo]: PortfolioRepo;
};

export async function preparePortfolioData(): Promise<PortfolioData> {
  const allRepoData = await prepareGitHubRepoData();
  const result: PortfolioData = {};

  for (const [key, info] of Object.entries(portfolioRepoInfo)) {
    const repoData = allRepoData?.find((repo) => repo.name === info.slug);

    if (repoData) {
      // Repo exists in GitHub data
      result[key] = {
        name: info.override?.name ?? repoData.name,
        description: info.override?.description ?? repoData.description ?? '',
        stargazers_count:
          info.override?.stargazers_count ?? repoData.stargazers_count,
        forks_count: info.override?.forks_count ?? repoData.forks_count,
        html_url: info.override?.html_url ?? repoData.html_url,
        programmingLanguages: info.programmingLanguages,
        secondaryDescription: info.secondaryDescription,
      };
    } else {
      // Repo not found in GitHub data, but override exists
      result[key] = {
        name: info?.override?.name ?? info.slug,
        description: info?.override?.description ?? '',
        stargazers_count: info?.override?.stargazers_count ?? 0,
        forks_count: info?.override?.forks_count ?? 0,
        html_url: info?.override?.html_url ?? buildGithubRepo(info.slug),
        programmingLanguages: info.programmingLanguages,
        secondaryDescription: info.secondaryDescription,
      };
    }
    // If no override and not found in GitHub data, the repo is skipped
  }

  return result;
}

function formatNumber(num: number): string | null {
  if (!num || num === 0) {
    return null;
  }

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  } else {
    return num.toString();
  }
}

export default async function Body() {
  const portfolioRepoData = await preparePortfolioData();

  const allLanguages = Object.values(ProgrammingLang);

  return (
    <div>
      <div className='pt-10 font-bold text-lg text-left'>
        I’m Ganesh, and I build stuff!
      </div>
      <div className='pt-6 font-light text-sm opacity-85 leading-7 text-left'>
        I am a huge fan of the Open-Source ecosystem and have authored over{' '}
        <span className='font-bold'>20</span> projects, SDKs, and tools. One of
        my creations,{' '}
        <ALink
          href='https://github.com/ganeshrvel/openmtp'
          text='OpenMTP'
        />
        —a Free and OpenSource Android File Transfer app for macOS—has been a
        huge hit, used by people in{' '}
        <span className='font-bold'>180+ countries</span>.
      </div>
      <div className='pt-0 font-light text-sm opacity-85 leading-7 text-left'>
        My packages in{' '}
        <ALink
          href='https://github.com/ganeshrvel#popular-reactjselectronjsnodejs-projects'
          text='React.js/Node.js/Electron.js'
        />
        ,{' '}
        <ALink
          href='https://github.com/ganeshrvel#-rust-projects'
          text='Rust'
        />
        ,{' '}
        <ALink
          href='https://github.com/ganeshrvel#popular-flutterdart-projects'
          text='Flutter/Dart'
        />
        , and{' '}
        <ALink
          href='https://github.com/ganeshrvel#go-projects'
          text='Go'
        />{' '}
        are widely used by developers around the world.
      </div>

      <ClientWrapper allLanguages={allLanguages}>
        {Object.entries(portfolioRepoData).map(([key, data]) => (
          <div
            key={key}
            className='mb-4'
            data-languages={JSON.stringify(data.programmingLanguages)}
          >
            <PortfolioCard
              title={data.name}
              description={data.description}
              href={data.html_url}
              githubStars={formatNumber(data.stargazers_count)}
              forkCount={formatNumber(data.forks_count)}
              secondaryDescription={data.secondaryDescription}
              programmingLanguages={data.programmingLanguages}
            />
          </div>
        ))}
      </ClientWrapper>
    </div>
  );
}
