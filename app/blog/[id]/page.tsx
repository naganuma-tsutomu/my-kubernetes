import { getDetail, getList } from "@/lib/microcms";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as cheerio from "cheerio";

export const revalidate = 60;

export async function generateStaticParams() {
    const { contents } = await getList();
    return contents.map((content) => ({
        id: content.id,
    }));
}

export default async function BlogDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const blog = await getDetail(params.id);

    if (!blog) {
        notFound();
    }

    // HTMLのパース（必要に応じてスタイリングのクラスを付与）
    const $ = cheerio.load(blog.content);
    $('h1').addClass('text-3xl font-bold mt-8 mb-4 border-b-4 border-black dark:border-white pb-2');
    $('h2').addClass('text-2xl font-bold mt-8 mb-4 border-l-8 border-black dark:border-white pl-4');
    $('h3').addClass('text-xl font-bold mt-6 mb-3');
    $('p').addClass('mb-4 leading-relaxed');
    $('ul').addClass('list-disc list-inside mb-4');
    $('ol').addClass('list-decimal list-inside mb-4');
    $('li').addClass('mb-1');
    $('pre').addClass('bg-zinc-900 text-white p-4 rounded-md overflow-x-auto mb-4 font-mono text-sm');
    $('code').addClass('bg-gray-100 dark:bg-zinc-800 px-1 rounded');
    $('a').addClass('text-[#E53935] hover:underline');
    $('img').addClass('rounded-lg border-4 border-black dark:border-white my-8');

    return (
        <article className="relative py-24 px-4 min-h-screen">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <header className="mb-12">
                        <p className="text-lg font-bold text-gray-500 mb-2">
                            {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("ja-JP")}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold font-oswald uppercase leading-tight mb-8">
                            {blog.title}
                        </h1>
                        {blog.eyecatch && (
                            <div className="relative aspect-video w-full mb-8 border-4 border-black dark:border-white">
                                <Image
                                    src={blog.eyecatch.url}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </header>

                    <div
                        className="prose prose-zinc dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: $.html() }}
                    />
                </div>
            </div>
        </article>
    );
}
