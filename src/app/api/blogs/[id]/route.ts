import blogs from '@/data/blogs.json';
import { NextResponse } from 'next/server';

// GET /blogs/[id] - to fetch all blogs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: Request, context: any) {
  const { params } = context;
  const blogId = params.id;

  // Adding delay to make it realtime API request
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });

  if (!blogId) {
    return NextResponse.json(
      {
        message: 'Invalid blog ID',
      },
      {
        status: 400,
      }
    );
  }

  const blog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return NextResponse.json(
      {
        message: 'Blog Not Found',
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    message: 'Blogs fetched successfully',
    data: blog,
  });
}

