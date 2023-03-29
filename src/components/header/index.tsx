import { Category, CategoryKey } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderContainer, HeaderItem } from "./styled";

interface IHeaderProps {
  items: CategoryKey[];
}

export const Header: React.FC<IHeaderProps> = ({ items }) => {
  const router = useRouter();
  const currentRoute = router.query;

  const categoriesToRender: CategoryKey[] = Object.keys(Category).filter(
    (objectKey) => items.includes(objectKey as CategoryKey)
  ) as CategoryKey[];

  return (
    <HeaderContainer>
      {categoriesToRender.map((category) => (
        <Link
          href={`/?filter=${Number(category)}`}
          key={Category[category]}
          className={`${HeaderItem()} ${
            (currentRoute.filter as string) === category ? "active" : ""
          }`}
        >
          {Category[category]}
        </Link>
      ))}

      <Link
        href="/"
        className={`${HeaderItem()} ${
          currentRoute.filter === undefined ? "active" : ""
        }`}
      >
        Show all
      </Link>
    </HeaderContainer>
  );
};
