"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface IData {
  objectId: string;
  image: string;
  title: string;
  content: string;
}

export default function ArticleCard(props: { data: IData[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState(props.data);

  useEffect(() => {
    const delay = setTimeout(() => {
      async function fetchArticles() {
        try {
          const whereClause = `title LIKE '%25${encodeURIComponent(
            searchQuery
          )}%25'`;
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/data/articles?where=${whereClause}`
          );
          const data = await response.json();
          setArticles(data);
        } catch (error) {
          console.log(`Error fetching article: ${error}`);
        }
      }
      fetchArticles();
    }, 500);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  return (
    <main className="min-h-auto pt-30 bg-white flex flex-col justify-center items-center gap-y-15 pb-20">
      <h1 className="text-3xl text-[#203475] font-semibold md:text-5xl">
        Article Page
      </h1>

      <div className="flex flex-col justify-center items-start gap-4 md:flex-row md:justify-between md:items-center md:w-[1080px]">
        <input
          type="text"
          placeholder="Search articles..."
          className="border-2 border-gray-100 bg-white shadow-md w-[350px] py-2 rounded-xl placeholder:text-gray-400 pl-2 text-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Link href="/" className="text-lg text-[#E11C22] hover:font-light pl-1">
          Create article
        </Link>
      </div>

      <div className="grid grid-cols-1 justify-center items-center gap-y-15 md:grid-cols-3 md:gap-x-5">
        {articles.map((element: IData) => {
          return (
            <article key={element.objectId}>
              <div className="flex flex-col justify-between items-start bg-white w-[350px] h-[400px] rounded-3xl shadow-xl">
                <div className="relative w-full h-[200px]">
                  <Image
                    src={element.image}
                    alt={element.title}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                </div>
                <div className="flex flex-col justify-center items-start max-w-[350px] px-5 gap-2 pb-3">
                  <h3 className="text-[#203475] text-2xl font-semibold">
                    {element.title}
                  </h3>
                  <p className="text-sm text-black font-light">
                    {element.content.length > 100
                      ? element.content.slice(0, 100) + "..."
                      : element.content}
                  </p>
                  <Link
                    href={`/articles/${element.objectId}`}
                    className="text-[#E11C22] hover:text-red-800 cursor-pointer"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
