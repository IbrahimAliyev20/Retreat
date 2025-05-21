/////////////Slider Type/////////////

export interface SliderType{
    title: string;
    description: string;
    button_text:string;
    button_link: string;
    image: string;
    thumb_image: string;
    image_2: string;
    thumb_image_2:string; 
}
/////////////Slider Type/////////////


//////////////////////////////////////////////////////////////


/////////////JoinUs Type//////////////

export interface JoinUsType {
  title: string;
  description: string;
  icon:string;
}
/////////////JoinUs Type//////////////



//////////////////////////////////////////////////////////////



///////// Gallery Type ////////

export interface GalleryType {
  image:string;
  thumb_image:string;
}
///////// Gallery Type ////////



//////////////////////////////////////////////////////////////



/////// Comments Type //////////

export interface CommentsType {
  author:string;
  description:string;
  image: string;
  thumb_image: string;
}
/////// Comments Type //////////



//////////////////////////////////////////////////////////////



////////// Teams Type ////////////

export interface TeamsType {
  name: string;
  slug: string;
  description: string;
  profession: string;
  image: string;
  thumb_image: string;
  instagram?: string; 
  twitter?: string; 
}
////////// Teams Type ////////////



//////////////////////////////////////////////////////////////



//////////// Counters Type //////////////

export interface CountersType {
    title: string;
    number: number;
}

//////////// Counters Type //////////////



//////////////////////////////////////////////////////////////



////////// MetaTagsType /////////////

export interface MetaTagsType {
    title: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
}
////////// MetaTagsType /////////////



//////////////////////////////////////////////////////////////



//////////BreadCrumb TYPE////////////////

export interface BreadCrumbType {
  title: string;
  name:string;
  desciption:string;
  image: string;
  thumb_image: string;
}
//////////BreadCrumb TYPE////////////////



//////////////////////////////////////////////////////////////



/////////////ABOUT TYPE ///////////
export interface AboutType {
  title: string; 
  description: string;
  image: string;
  thumb_image: string;
}
/////////////ABOUT TYPE ///////////



//////////////////////////////////////////////////////////////



///////////FAQ TYPE ////////////////

export interface FAQCategory {
  title: string;
  slug: string;
  faqs: FAQItem[]
}
export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQType = FAQCategory[];

///////////FAQ TYPE ////////////////



export interface ValuesType {
  title: string; 
  description: string;
  image: string;
  thumb_image: string;
}


///////////////////////////


export interface ContactType {
  email: string;
  address: string;
  phone: string;
  image: string;
  thumb_image: string;
}


/////////////////////////////


export type BlogsType = {
  title: string;
  description: string;
  slug: string;
  image: string;
  thumb_image: string;
};

export type BlogApiResponse = {
  data: BlogsType[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};



/////////////////////////////
