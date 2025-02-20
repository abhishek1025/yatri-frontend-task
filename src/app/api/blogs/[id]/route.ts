import { NextRequest, NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

// GET /blogs/[id] - to fetch all blogs
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const blogId = (await params).id;

  // Adding delay to make it realtime API request
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  if (!blogId) {
    return NextResponse.json(
      {
        message: "Invalid blog ID",
      },
      {
        status: 400,
      },
    );
  }

  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

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
