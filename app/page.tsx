import { notionDatabase } from '@/lib/notion';

export default async function Home() {
  let db;

  try {
    if (!process.env.NOTION_DATABASE_ID) {
      throw new Error('데이터베이스 아이디가 없습니다.');
    }
    db = await notionDatabase.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });
  } catch (error) {
    console.error(error);
    return <main>에러가 발생했습니다.</main>;
  }

  return <main></main>;
}