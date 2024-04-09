const GridPage = () => {
  return (
    <div className='h-full '>
      <div className='grid grid-cols-4 gap-4 pt-4 '>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400 '>01</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400'>02</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400 col-span-2 '>03</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400'>04</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400 col-span-2'>05</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400 '>06</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400 col-span-2'>07</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400'>08</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-400'>09</div>
      </div>
      <div className='grid grid-cols-6 gap-4 pt-8 pb-4 '>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-700 col-start-2 col-span-4 '>01</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-700 col-start-1 col-end-3'>02</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-700 col-start-5 col-end-7'>03</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-700 col-start-2 col-span-4'>04</div>
      </div>
      <div className='grid grid-rows-3 grid-flow-col gap-4 pt-8 pb-4 '>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-200 row-span-3 '>01</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-200 col-span-2'>02</div>
        <div className='rounded-lg leading-8 p-4 text-center bg-sky-200 row-span-2 col-span-2'>03</div>
      </div>
      <div className=' grid grid-rows-3 grid-flow-col gap-4 pt-8 pb-4 '>
        <div className='rounded-lg leading-8 py-10 text-center bg-sky-300 row-start-2 row-span-2 '>01</div>
        <div className='rounded-lg leading-8 py-10 text-center bg-sky-300 row-start-1 row-span-2 '>02</div>
        <div className='rounded-lg leading-8 py-10 text-center bg-sky-300 row-start-1 row-span-3'>03</div>
      </div>
    </div>
  );
};
export default GridPage;
