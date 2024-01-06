import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

interface IPage {
  children: ReactNode;
  users: ReactNode;
  posts: ReactNode;
}
export const metadata: Metadata = {
  title: 'dashboard',
  description: 'Generated',
};
const DashboardLayout: FC<IPage> = ({ children, posts, users }) => {
  return (
    <main className='gap-4 flex flex-col py-4  bg-slate-400'>
      <>
        {children}
        {users}
        {posts}
      </>
    </main>
  );
};

export default DashboardLayout;
