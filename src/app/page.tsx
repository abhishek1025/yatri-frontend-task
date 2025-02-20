import Await from "@/components/Await";
import { BlogList } from "@/components/blog";
import { Suspense } from "react";
import { v4 as uuid } from "uuid";
import { BlogListLoader } from "@/components/ui/loaders";

async function fetchBlogs({
  searchText = "",
  page = "1",
}: {
  searchText?: string;
  page?: string;
}) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_BASE_URL}/blogs?searchText=${searchText}&page=${page}&limit=6`,
    );

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

export default async function Home(props: {
  searchParams?: Promise<{
    searchText?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const blogs = fetchBlogs({ ...searchParams });

  return (
    <div key={uuid()}>
      <Suspense fallback={<BlogListLoader />}>
        <Await promise={blogs}>{(data) => <BlogList {...data} />}</Await>
      </Suspense>
    </div>
  );
}
