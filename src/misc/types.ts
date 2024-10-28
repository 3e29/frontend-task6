export type Theme = "light" | "dark";
export type Category =
  | "Design"
  | "Research"
  | "Presentation"
  | "Interface"
  | "Leadership"
  | "Management"
  | "Product"
  | "Frameworks"
  | "Software Development"
  | "Tools"
  | "SaaS"
  | "Customer Success";
export type Section = {
  image: string;
  imageDescription: string;
  content: string[];
};
export type Posts = {
  id: number;
  title: string;
  date: string;
  mainImage: string;
  introText: string;
  categories: string[];
};
export type PostSection = Posts & {
  sections: Section[];
};

export type PostState = {
  posts: PostSection[];
  mainImages: string[];
  secImages: string[];
  page: number;
  pages: number;
  visiblePosts: PostSection[];
};
