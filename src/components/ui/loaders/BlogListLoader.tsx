"use client"

export default function BlogListLoader(){

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-8'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className='p-4 border rounded-lg animate-pulse bg-white'
          key={index}>
          {/* Author & Profile */}
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
            <div className='h-4 w-32 bg-gray-300 rounded'></div>
          </div>

          {/* Blog Title */}
          <div className='mt-4 h-6 w-3/4 bg-gray-300 rounded'></div>

          {/* Summary */}
          <div className='mt-2 h-4 w-full bg-gray-200 rounded'></div>
          <div className='mt-1 h-4 w-5/6 bg-gray-200 rounded'></div>
          <div className='mt-1 h-4 w-4/6 bg-gray-200 rounded'></div>

          {/* Date, Votes, Image */}
          <div className='flex justify-between items-center mt-4'>

            <div className='flex items-center space-x-4'>
              <div className='h-4 w-16 bg-gray-300 rounded'></div>

                <div className='h-4 w-10 bg-gray-300 rounded'></div>
                <div className='h-4 w-10 bg-gray-300 rounded'></div>
              
            </div>

            {/* Image Placeholder */}
            <div>
    <div className='flex items-center space-x-2'>
                <div className='h-4 w-6 bg-gray-300 rounded'></div>
                <div className='h-4 w-6 bg-gray-300 rounded'></div>
              </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );


}