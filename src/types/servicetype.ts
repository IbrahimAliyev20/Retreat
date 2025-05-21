export type TeamMemberType = {
  name: string;
  slug: string;
  description: string;
  profession: string;
  image: string;
  thumb_image: string;
};

export type Attribute1Type = {
  key: string;
  value: string;
};

export type Attribute2Type = {
  image: string;
  value: string;
};

export type ServiceType = {
  title: string;
  slug: string;
  date_range: string;
  short_description: string;
  description: string;
  image: string;
  thumb_image: string;
  teams: TeamMemberType[];
  attribute_1: Attribute1Type[];
  attribute_2: Attribute2Type[];
};


export type PaginationLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type MetaType = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type LinksType = {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
};

export type ServiceListResponse = {
  data: ServiceType[];
  links: LinksType;
  meta: MetaType;
};
