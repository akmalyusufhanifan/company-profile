import ArticleCard from "../components/article-card";

export default async function ArticlesPage() {
  const response = await fetch(`${process.env.API_BASE}/data/articles`);
  const data = await response.json();

  return <ArticleCard data={data} />;
}
