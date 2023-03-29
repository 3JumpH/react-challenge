import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { parseHTMLstring } from "../../utils";

export const Category = {
  "1": "X Universe",
  "2": "Elite: Dangerous",
  "3": "Starpoint Gemini",
  "4": "EVE Online",
} as const;

export type CategoryKey = keyof typeof Category;

export interface IArticle {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  post_image: string;
  post_thumbnail: string;
  post_category_id: CategoryKey;
}

const fetchArticles = async (): Promise<IArticle[]> => {
  const articles = await axios<IArticle[]>(
    "https://react-challenge.human.hr/last-100-news.json"
  );

  return articles.data.map((article) => ({
    ...article,
    excerpt: parseHTMLstring(article.excerpt),
  }));
};

const useArticles = () => {
  return useQuery<IArticle[]>({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });
};

export { useArticles, fetchArticles };
