export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  image: string;
  thumb_image: string;
}

export interface BlogLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface BlogMetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface BlogMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: BlogMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface BlogResponse {
  data: BlogPost[];
  links: BlogLinks;
  meta: BlogMeta;
}