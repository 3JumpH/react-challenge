import { IArticle } from "@/hooks";
import { formatDateString } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { FloatingButton } from "../layout/Button";
import {
  ArticleContainer,
  ArticleFooter,
  ArticleImageContainer,
  ArticleInfoContainer,
  ArticleInnerContainer,
  ArticleTitle,
} from "./styled";

interface IArticleProps {
  article: IArticle;
  onDelete: () => void;
}

export const Article: React.FC<IArticleProps> = ({ article, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);

  function openInNewTab(slug: string) {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://react-challenge.human.hr/news/${slug}`,
    }).click();
  }

  return (
    <ArticleContainer
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      {showDelete && (
        <FloatingButton onClick={() => onDelete && onDelete()}>
          Delete
        </FloatingButton>
      )}
      <ArticleInnerContainer>
        <ArticleImageContainer onClick={() => openInNewTab(article.slug)}>
          <Image
            alt="Mountains"
            src={`https://react-challenge.human.hr/assets/images/post_img/${article.post_image}`}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </ArticleImageContainer>
        <ArticleInfoContainer>
          <ArticleTitle onClick={() => openInNewTab(article.slug)}>
            {article.title}
          </ArticleTitle>
          <div>{formatDateString(article.date)}</div>
          <div>{article.excerpt}</div>
        </ArticleInfoContainer>
      </ArticleInnerContainer>

      <ArticleFooter>
        <div onClick={() => openInNewTab(article.slug)}>Full article</div>
      </ArticleFooter>
    </ArticleContainer>
  );
};
