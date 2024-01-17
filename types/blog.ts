export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};

export type Project = {
  id: number,
  week?: number,
  class?: number,
  member_1?: string,
  member_2?: string,
  member_3?: string,
  brief?: string,
  readme?: string,
  title: string,
  giturl: string
}