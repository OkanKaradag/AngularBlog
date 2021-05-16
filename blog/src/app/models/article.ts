import { Category } from './category';

export class Article {
  id: number;
  title: string;
  contentMain: string;
  contentSummary: string;
  picture: string;
  publishDate: Date;
  viewCount: number;
  commentCount: number;
  category: Category;
}
