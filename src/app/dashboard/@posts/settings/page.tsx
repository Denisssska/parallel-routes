import { delay } from '@/libs/utils';

const Settings = async () => {
  await delay(3000);
  return (
    <div className='bg-slate-500  rounded-lg  h-20 justify-center flex flex-col'>
      <section className='block'>
        <h1 className='text-center font-semibold text-red-900 text-3xl'>Settings post</h1>
      </section>
    </div>
  );
};

export default Settings;
