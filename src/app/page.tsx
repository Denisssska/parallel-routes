import { PropsWithChildren } from 'react';

const Home = ({ children }: PropsWithChildren<never>) => {
  return (
    <main className='flex flex-col items-center justify-between py-4 bg-white'>
      <div className='bg-sky-800  rounded-lg w-full h-20 justify-center flex flex-col'>
        <h1 className='text-center font-semibold text-white text-3xl'>Parallel Routes</h1>
      </div>
      {children}
    </main>
  );
};
export default Home;
