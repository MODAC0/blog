import { notionDatabase } from "@/lib/notion";

export default async function Home() {
    if (!process.env.NOTION_DATABASE_ID) {
        throw new Error('데이터베이스 아이디가 없습니다.');
    }
    const db = await notionDatabase.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log(db);

    return <main>
        <div><p>{db.object}</p>
            <p>gd</p></div>
    </main>;
}