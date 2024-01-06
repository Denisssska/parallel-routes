import { delay } from '@/libs/utils';

const Default = async () => {
  await delay(1000);

  return (
    <div className='bg-sky-800  rounded-lg  h-20 justify-center flex flex-col'>
      <div>
        <h1 className='text-center font-semibold text-white text-3xl'>Default Dashboard page</h1>
      </div>
    </div>
  );
};

export default Default;
