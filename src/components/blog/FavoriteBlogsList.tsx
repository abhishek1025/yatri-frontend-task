"use client";

import { useAppSelector } from "@/store/hooks";
import BlogCard from "@/components/blog/BlogCard";

export default function FavoriteBlogsList() {
  const { favoriteBlogs } = useAppSelector((state) => state.favoriteBlogs);

  return (
    <div className="mx-auto py-8">
      <h1 className="text-2xl font-bold pb-8">Your Favorite Blogs</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        {favoriteBlogs.length === 0 && (
          <div className="rounded p-3 bg-primary-600 text-xl font-bold text-white">
            No Blogs Found in your favorite list. Please add some.
          </div>
        )}

        {favoriteBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
