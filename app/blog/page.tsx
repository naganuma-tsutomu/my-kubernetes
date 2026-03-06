import { getList } from "@/lib/microcms";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export const revalidate = 60; // 60秒ごとにISR（任意で設定）

export default async function BlogPage() {
    const { contents } = await getList();

    if (!contents || contents.length === 0) {
        return (
            <div className="container mx-auto py-24 px-4 text-center">
                <h1 className="text-4xl font-bold mb-8 font-oswald uppercase">Tech Blog</h1>
                <p className="text-gray-500">記事がありません。</p>
            </div>
        );
    }

    return (
        <section className="relative py-24 px-4 min-h-screen">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            <div className="container mx-auto relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] mb-16 font-oswald uppercase tracking-wide">
                    Tech Blog
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contents.map((blog, index) => (
                        <Link href={`/blog/${blog.id}`} key={blog.id}>
                            <ProjectCard
                                item={{
                                    title: blog.title,
                                    description: (blog.content || "").replace(/<[^>]*>?/gm, "").substring(0, 100) + "...",
                                    slug: blog.id,
                                    imageUrl: blog.eyecatch?.url,
                                    date: new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("ja-JP"),
                                }}
                                index={index}
                                type="blog"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
