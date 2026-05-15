type GitHubRepo = {
  owner: string;
  url: string;
  name: string;
  fallback_stars: number;
};
type JsRepo = {
  name: string;
  url: string;
}

export let github_repo: GitHubRepo = {
  owner: "SikandarJODD",
  url: "https://github.com/SikandarJODD/sv-prompt-kit",
  name: "sv-prompt-kit",
  fallback_stars: 0,
};

export let jsrepo: JsRepo = {
  name: "@sv/prompt-kit",
  url: "https://www.jsrepo.com/@sv/prompt-kit",
};

