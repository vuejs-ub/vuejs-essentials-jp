export type Content = {
  title: string;
  jstDate: string;
  description?: string;
  img?: {
    url: string;
    alt?: string;
  };
  originalUrls?: {
    url: string;
    alt?: string;
  }[];
  pickup?: boolean;
};
