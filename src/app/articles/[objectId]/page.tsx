// import Image from "next/image";

// interface IProps {
//   params: { objectId: string };
// }

// async function getArticleData(objectId: string) {
//   const url = `${process.env.API_BASE}/data/articles/${objectId}`;
//   const response = await fetch(url, { cache: "no-store" });
//   if (!response.ok) throw new Error("Failed to fetch article");
//   return response.json();
// }

// export async function generateMetadata({ params }: IProps) {
//   const data = await getArticleData(params.objectId);
//   return { title: data.title };
// }

// export default async function ArticleDetails({ params }: IProps) {
//   const article = await getArticleData(params.objectId);

//   return (
//     <main>
//       <div className="relative w-80 h-80 mb-8">
//         <Image
//           src={article?.image}
//           alt={article?.title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <h3 className="text-xl font-bold mb-2">{article.title}</h3>
//       <p className="w-full max-w-[700px]">{article.content}</p>
//     </main>
//   );
// }
