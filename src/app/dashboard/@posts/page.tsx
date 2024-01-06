import { delay } from '@/libs/utils';

const Posts = async () => {
  await delay(1000);
  // throw new Error('hahahha')
  return (
    <div className='bg-slate-500  rounded-lg  h-20 justify-center flex flex-col'>
      <section className='block'>
        <h1 className='text-center font-semibold text-red-900 text-3xl'>Posts</h1>
      </section>
    </div>
  );
};

export default Posts;
