export type BadgeType = "New" | "Updated" | "Beta";

export interface Component {
  id: string;
  name: string;
  href: string;
  badge?: BadgeType;
  desc?: string;
}

export interface DocPage {
  id: string;
  name: string;
  href: string;
  desc?: string;
}

let components: Component[] = [
  {
    id: "chain-of-thought",
    name: "Chain Of Thought",
    href: "/components/chain-of-thought",
    desc: "TODO: Add a concise description for Chain Of Thought.",
  },
  {
    id: "feedback-bar",
    name: "Feedback Bar",
    href: "/components/feedback-bar",
    desc: "TODO: Add a concise description for Feedback Bar.",
  },
];

export { components };

let docsPages: DocPage[] = [
  {
    id: "docs",
    name: "Introduction",
    href: "/docs",
    desc: "Getting started with the setup.",
  },
  {
    id: "installation",
    name: "Installation",
    href: "/docs/installation",
    desc: "Create the app and initialize shadcn-svelte.",
  },
];

export { docsPages };

type NavigationItem = DocPage | Component;

function getNavigationItems(): NavigationItem[] {
  return [...docsPages, ...components];
}

export function getPrevNext(id: string): {
  prev: NavigationItem | null;
  next: NavigationItem | null;
} {
  let items = getNavigationItems();
  let index = items.findIndex((item) => item.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? items[index - 1] : null,
    next: index < items.length - 1 ? items[index + 1] : null,
  };
}
