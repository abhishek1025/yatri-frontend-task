"use client";

import { BlogType } from "@/types";
import { formatDate, generateSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUpvote } from "react-icons/bi";
import { AddToFavoriteBtns } from "@/components/ui";
import { CiShare1 } from "react-icons/ci";

type BlogCardTypes = {
  blog: BlogType;
};

export default function BlogCard({ blog }: BlogCardTypes) {
  return (
    <div>
      <div className="border p-5 rounded space-y-5">
        {/* Author Name */}
        <div className="flex gap-4 items-center text-sm">
          <Image
            src={blog.authorPicture}
            width="25"
            height="25"
            alt={blog.author}
            className="rounded"
          />
          <p>{blog.author}</p>
        </div>

        <div>
          <Link href={`blog/${generateSlug(blog.title, blog.id)}`}>
            {/* Blog details */}
            <div className="flex gap-x-4 items-center">
              <div className="space-y-4 flex-1">
                <h1 className="text-xl lg:text-2xl font-bold line-clamp-2">
                  {blog.title}
                </h1>
                <p className="text-gray-500 line-clamp-2">{blog.summary}</p>
              </div>

              <div className="w-[20%]">
                <Image
                  src={blog.coverImg}
                  alt={blog.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-between items-center text-gray-600">
          <div className="flex gap-x-4">
            <p className="text-sm">{formatDate(blog.createdAt)}</p>

            <div className="flex gap-x-1 items-center">
              <BiSolidUpvote className="text-xl" />

              <span className="text-sm"> {blog.upVotes} </span>
            </div>

            <div className="flex gap-x-1 items-center">
              <BiSolidUpvote className="rotate-180 text-xl" />

              <span className="text-sm"> {blog.downVotes} </span>
            </div>
          </div>

          <div className="text-2xl flex gap-x-5 item-center">
            <CiShare1 />

            <AddToFavoriteBtns blog={blog} />
          </div>
        </div>
      </div>
    </div>
  );
}
