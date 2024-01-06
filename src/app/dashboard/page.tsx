import { delay } from '@/libs/utils';

const DashboardPage = async () => {
  await delay(2000);
  return (
    <div className='bg-sky-800  rounded-lg  h-20 justify-center flex flex-col'>
      <div>
        <h1 className='text-center font-semibold text-white text-3xl'>Dashboard page</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
