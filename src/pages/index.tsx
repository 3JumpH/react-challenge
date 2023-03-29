import {
  Article,
  FloatingContainer,
  Header,
  Search,
  Toggle,
} from "@/components";
import { Button } from "@/components/layout/Button";
import {
  Category,
  CategoryKey,
  fetchArticles,
  IArticle,
  useArticles,
} from "@/hooks";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { useEffect, useState } from "react";

type PageParams = {
  query?: string;
  filter?: string;
};

const Home = () => {
  const router = useRouter();
  const { query, filter } = router.query as PageParams;
  const { data, refetch, isFetching, isSuccess } = useArticles();
  const [searchValue, setSearchValue] = useState(query || "");
  const [articleData, setArticleData] = useState<IArticle[]>([]);
  const [articlesToRender, setArticlesToRender] = useState<IArticle[]>([]);
  const [categoriesToRender, setCategoriesToRender] = useState<CategoryKey[]>(
    []
  );

  useEffect(() => {
    setArticleData(data || []);
  }, [data, isFetching]);

  useEffect(() => {
    setSearchValue("");
  }, [filter]);

  useEffect(() => {
    setSearchValue(query || "");
  }, [query]);

  useEffect(() => {
    let dataToRender = filter
      ? articleData?.filter((d) => d.post_category_id === filter)
      : articleData;

    dataToRender =
      query && searchValue.length > 2
        ? dataToRender?.filter(
            (d) =>
              d.title.toLowerCase().includes((query as string).toLowerCase()) ||
              d.excerpt.toLowerCase().includes((query as string).toLowerCase())
          ) || []
        : dataToRender;

    setArticlesToRender(dataToRender || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, query, articleData]);

  useEffect(() => {
    let categories = articleData?.map((c) => c.post_category_id);
    setCategoriesToRender([...new Set(categories)]);
  }, [articleData]);

  const handleSearch = () => {
    if (searchValue.length > 2) {
      router.push(
        { query: { ...router.query, query: searchValue } },
        undefined,
        {
          shallow: true,
        }
      );
    } else {
      router.push({ query: { filter } }, undefined, {
        shallow: true,
      });
    }
  };

  const handleDelete = (slug: string) => {
    const tmpCopy = [...articleData];
    const index = tmpCopy.findIndex((a) => a.slug === slug);

    if (index < 0) return;
    tmpCopy.splice(index, 1);
    setArticleData(tmpCopy);
  };

  const handleCategoryDelete = (categoryId: CategoryKey) => {
    console.log(categoryId);

    const newData = articleData.filter(
      (article) => article.post_category_id !== categoryId
    );
    setArticleData(newData);
  };

  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <FloatingContainer>
        {filter === undefined && isSuccess && articlesToRender.length < 100 && (
          <Button onClick={handleRefetch}>Refetch</Button>
        )}
        <Toggle items={categoriesToRender} onDelete={handleCategoryDelete} />
      </FloatingContainer>
      <Header items={categoriesToRender} />
      <Search
        value={searchValue}
        itemCount={articlesToRender.length}
        onChange={(nv) => setSearchValue(nv)}
        onSearch={() => handleSearch()}
      ></Search>
      <nav>
        {articlesToRender?.map((post, index) => (
          <Article
            article={post}
            key={index}
            onDelete={() => handleDelete(post.slug)}
          />
        ))}
      </nav>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["articles"], fetchArticles);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
