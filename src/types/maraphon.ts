// types/maraphon.ts

/**
 * Marafonun atributlarını təmsil edir (məsələn, "Şəxsi otaq").
 */
export interface MaraphonAttribute {
  value: string;
  image: string;
}

/**
 * API cavabının "data" massivindəki tək bir marafon obyektini təmsil edir.
 * Bu, sizin əsas "MaraphonType"-ınızdır.
 */
export interface MaraphonType {
  name: string;
  slug: string;
  description: string;       // HTML content daxildir
  short_description: string;
  image: string;
  thumb_image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  start_date: string;
  end_date: string;
  address: string;
  participant: string;
  attributes: MaraphonAttribute[];
}

/**
 * API cavabının "links" obyektini təmsil edir (səhifələmə üçün əsas linklər).
 */
export interface PaginationLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

/**
 * API cavabının "meta.links" massivindəki hər bir səhifə linkini təmsil edir.
 */
export interface MetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

/**
 * API cavabının "meta" obyektini təmsil edir (səhifələmə haqqında ətraflı məlumat).
 */
export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

/**
 * "api/maraphons" endpointindən gələn tam API cavabını təmsil edir.
 */
export interface MaraphonApiResponse {
  data: MaraphonType[];
  links: PaginationLinks;
  meta: PaginationMeta;
}