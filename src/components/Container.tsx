import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container h-screen flex flex-col justify-between mx-auto px-5 xs:px-0'>{children}</div>
  );
  // return <div className='min-h-screen flex flex-col justify-between'>{children}</div>;
};

export default Container;
