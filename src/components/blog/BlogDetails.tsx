"use client"

import { BlogType} from "@/types";
import { formatDate } from '@/utils';
import Image from 'next/image';

import { BiSolidUpvote } from 'react-icons/bi';
import { CiBookmarkPlus, CiShare1 } from 'react-icons/ci';

export default function BlogDetails ({blog}: {blog: BlogType}) {
return (
  <div className='w-full lg:w-[80%] mx-auto py-8 space-y-8'>
    <h1 className='text-3xl font-bold'>{blog?.title}</h1>

    {/* Author info */}
    <div className='flex gap-4 items-center'>
      <Image
        src={blog.authorPicture}
        width='50'
        height='50'
        alt={blog.author}
        className='rounded-full'
      />
      <div>
        <p>{blog.author}</p>
        <p className='text-gray-600 text-sm'>{formatDate(blog.createdAt)}</p>
      </div>
    </div>

    {/* Icons */}
    <div className='border-b border-t p-3 border-gray-200 flex justify-between items-center text-gray-600'>
      <div className='flex gap-x-4'>
        <div className='flex gap-x-1 items-center'>
          <BiSolidUpvote className='text-xl' />

          <span className='text-sm'> {blog.upVotes} </span>
        </div>

        <div className='flex gap-x-1 items-center'>
          <BiSolidUpvote className='rotate-180 text-xl' />

          <span className='text-sm'> {blog.downVotes} </span>
        </div>
      </div>

      <div className='text-2xl flex gap-x-5 item-center'>
        <CiShare1 />
        <CiBookmarkPlus />
      </div>
    </div>

    {/* Cover Img */}
    <div className='relative  w-[80%] lg:w-[60%] m-auto'>
      <Image
        src={blog.coverImg}
        alt={blog.title}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        className='object-contain'
      />
    </div>

    <div
      className='un-reset text-black'
      dangerouslySetInnerHTML={{
        __html: blog.fullText,
      }}
    />
  </div>
);


}