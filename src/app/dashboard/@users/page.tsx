import { delay } from '@/libs/utils';

const Users = async () => {
  await delay(3000);
  return (
    <div className='bg-orange-500 mx-auto rounded-lg max-w-[80%] w-screen h-20 justify-center flex flex-col'>
      <section className=' block'>
        <h1 className='text-center font-semibold text-amber-950 text-3xl'>Users</h1>
      </section>
    </div>
  );
};

export default Users;
