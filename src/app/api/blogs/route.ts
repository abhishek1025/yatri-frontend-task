import { NextRequest, NextResponse } from 'next/server';
import blogs from '@/data/blogs.json';

// GET /blogs - to fetch all blogs
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchText = searchParams.get('searchText') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  // Adding delay to make it realtime API request
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });

  //   Calculating start and end for the pagination
  const start = (page - 1) * limit;
  const end = page * limit;
  
  const filteredBlogs = blogs
  .filter(blog => {
    return searchText
    ? blog.title.toLowerCase().includes(searchText.toLowerCase())
    : true;
  })
  
  const paginatedBlogs = filteredBlogs.slice(start, end);
  
  const totalPages = Math.ceil(filteredBlogs.length / limit);


  return NextResponse.json({
    message: 'Blogs fetched successfully',
    data: {
      blogs: paginatedBlogs,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
      totalPages,
      currentPage: page,
    },
  });
}

