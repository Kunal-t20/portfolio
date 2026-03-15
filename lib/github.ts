export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  language: string;
  private: boolean;
}

export async function getProjects(): Promise<Repo[]> {
  try {
    // 1. Fetch pinned repo names from GitHub profile HTML
    const profileRes = await fetch("https://github.com/Kunal-t20", {
      next: { revalidate: 3600 },
    });
    
    let pinnedNames: string[] = [];
    if (profileRes.ok) {
      const html = await profileRes.text();
      // GitHub's pinned items usually have a span with class "repo" and title="RepoName"
      const matches = html.matchAll(/<span class="repo" title="([^"]+)">/g);
      pinnedNames = Array.from(matches, m => m[1]);
    }

    // Fallback if scraping fails or user has 0 pinned repos
    if (pinnedNames.length === 0) {
      pinnedNames = ["Autonomous_Decision_Auditor", "Data_Pipeline_Debugger"];
    }

    // 2. Fetch all repos from REST API
    const res = await fetch("https://api.github.com/users/Kunal-t20/repos?per_page=100", {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch repositories: ${res.status}`);
      return [];
    }

    const repos: Repo[] = await res.json();
    const publicRepos = repos.filter(repo => !repo.private);

    // 3. Filter only the pinned repos
    const pinnedRepos = publicRepos.filter(repo => pinnedNames.includes(repo.name));
    
    // 4. Sort them to match the order they appear on the profile
    pinnedRepos.sort((a, b) => pinnedNames.indexOf(a.name) - pinnedNames.indexOf(b.name));

    return pinnedRepos;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}
