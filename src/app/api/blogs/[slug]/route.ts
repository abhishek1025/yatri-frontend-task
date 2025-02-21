import blogs from "@/data/blogs.json";
import { generateSlug } from "@/utils";
import { NextResponse } from "next/server";

// GET /favorite-blogs/[id] - to fetch all favorite-blogs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: Request, context: any) {
  const { params } = context;
  const slug = params.slug;

  // Adding delay to make it realtime API request
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  if (!slug) {
    return NextResponse.json(
      {
        message: 'Invalid blog ID',
      },
      {
        status: 400,
      }
    );
  }



  const blog = blogs.find((blog) => generateSlug(blog.title, blog.id.toString()) === slug);

  if (!blog) {
    return NextResponse.json(
      {
        message: "Blog Not Found",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    message: "Blogs fetched successfully",
    data: blog,
  });
}


