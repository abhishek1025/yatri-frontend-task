'use client';

import { BlogType } from '@/types';
import BlogCard from './BlogCard';
import { Button } from '../ui';
import { useSearchParams, useRouter } from 'next/navigation';

type BlogListType = {
  blogs: BlogType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: string;
  currentPage: string;
};

export default function BlogList({
  blogs,
  hasNextPage,
  hasPrevPage,
  currentPage,
}: BlogListType) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePagination = (type: 'next' | 'prev') => {
    const params = new URLSearchParams(searchParams);

    if (type === 'next') {
      params.set('page', (parseInt(currentPage) + 1).toString());
    } else {
      params.set('page', (parseInt(currentPage) - 1).toString());
    }
    router.push(`/?${params.toString()}`);
  };

  

  return (
    <div className='py-8'>
     {
      blogs.length !== 0 ? (
       <>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {blogs.map(blog => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>

      <div className='mt-8 flex justify-between'>
        <p className='text-xl font-bold'>Page {currentPage}</p>

        <div className='flex gap-x-3'>
          <Button
            className='rounded py-1'
            onClick={() => {
              handlePagination('prev');
            }}
            disabled={!hasPrevPage}>
            Prev
          </Button>

          <Button
            className='rounded py-1'
            onClick={() => {
              handlePagination('next');
            }}
            disabled={!hasNextPage}>
            Next
          </Button>
        </div>
      </div>
       </>
      ) : (
        <div className="rounded p-3 bg-primary-600 text-xl font-bold text-white"> No Blogs Found </div>
      )
     }
    </div>
  );
}

