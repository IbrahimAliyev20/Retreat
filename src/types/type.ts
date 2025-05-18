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
  desciption:string;
  image: string;
  thumb_image: string;
}
/////// Comments Type //////////



//////////////////////////////////////////////////////////////



////////// Teams Type ////////////

export interface TeamsType {
  name:string;
  profession:string;
  image: string;
  thumb_image: string;
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