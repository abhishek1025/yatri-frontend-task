import { extractIdFromSlug } from "@/utils";

import Await from "@/components/Await";
import { BlogDetails } from "@/components/blog";
import { BlogDetailsLoader } from "@/components/ui/loaders";
import { Suspense } from "react";
import { v4 as uuid } from "uuid";

async function fetchBlogById(slug: string) {
  try {

    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/blogs/${slug}`);

    if (!res.ok) {
      throw new Error("Unexpected Error occurred. Please try again later.");
    }

    const resData = await res.json();

    if (!resData.data) {
      throw new Error("Unexpected Error occurred. Please try again later.");
    }

    return resData.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blog = fetchBlogById(slug?.toString() || "");

  return (
    <div key={uuid()}>
      <Suspense fallback={<BlogDetailsLoader />}>
        <Await promise={blog}>{(data) => <BlogDetails blog={data} />}</Await>
      </Suspense>
    </div>
  );
}

