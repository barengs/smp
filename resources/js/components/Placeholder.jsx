import React from 'react';

const Placeholder = () => {
  return (
    <div>
      <div className="animate-pulse">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="space-y-4">
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
          </div>
          <div className="space-y-4">
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
          </div>
          <div className="space-y-4">
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className='w-full h-2 rounded-md text-center'>Loading ...</div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
          </div>
          <div className="space-y-4">
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
          </div>
          <div className="space-y-4">
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
            <div className="w-full h-2 rounded-md bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;