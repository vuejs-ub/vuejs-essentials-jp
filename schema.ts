export interface Content {
  title: string;
  dateJst: string;
  summary?: string;
  img?: {
    src: string;
    alt: string;
  };
  originalUrls: {
    url: string;
    text: string;
  }[];
}
