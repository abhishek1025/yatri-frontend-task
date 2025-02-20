"use client";

export default function BlogDetailsLoader() {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-8 space-y-8 animate-pulse">
      <div className="h-10 bg-gray-300 rounded"></div>

      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-3 w-20 bg-gray-200 rounded mt-1"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        <div className="flex space-x-4">
          <div className="h-6 w-8 bg-gray-300 rounded"></div>
          <div className="h-6 w-8 bg-gray-300 rounded"></div>
        </div>

        <div className="flex space-x-2">
          <div className="h-6 w-8 bg-gray-300 rounded"></div>
          <div className="h-6 w-8 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="w-full h-[400px] bg-gray-300 rounded"></div>
    </div>
  );
}
