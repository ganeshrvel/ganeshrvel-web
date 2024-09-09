'use server';

import { GITHUB_USERNAME } from '@/app/const';
import { GithubRepo } from '@/app/api/types';

async function fetchGitHubRepoData(): Promise<null | GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&per_page=100`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 172800 }, // Revalidate every 2 days
    }
  );

  if (!res.ok) {
    console.error(`Error fetching GitHub repos: ${res.status}`);
    return null;
  }

  const data = await res.json();
  return Object.values(data);
}

export async function prepareGitHubRepoData(): Promise<null | GithubRepo[]> {
  const data = await fetchGitHubRepoData();

  if (data) {
    return data;
  }

  return null;
}
