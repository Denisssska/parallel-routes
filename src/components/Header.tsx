'use client';
import Link from 'next/link';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  // useEffect(() => {
  //   const button = document.querySelector('#burgerMenu');
  // }, []);

  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className='py-8 border-b'>
      <nav className='flex justify-between items-center'>
        <Link className=' z-10' href='/'>
          <span
            className={
              open ? 'text-white text-xl' : 'text-black ' + ' text-xl sm:text-2xl sm:text-black font-bold'
            }
          >
            PARALLEL ROUTES
          </span>
        </Link>
        <ul className='hidden  justify-center gap-10 text-lg  font-medium sm:flex'>
          <li>
            <Link
              className='  relative transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:h-[2px] after:w-full after:bg-sky-900'
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='relative transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:h-[2px] after:w-full after:bg-sky-900'
              href='/dashboard'
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className='relative transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:h-[2px] after:w-full after:bg-sky-900'
              href='/dashboard/settings'
            >
              P Settings
            </Link>
          </li>
        </ul>
        {/* <!-- кастомная кнопка из globals --> */}
        <div className='card rounded-none'>hahhaha</div>

        <button
          id='burgerMenu'
          onClick={() => setOpen(prev => !prev)}
          className={(open ? 'active ' : '') + 'group relative block h-5 w-[30px] sm:hidden z-10'}
        >
          <span className='h-[1px] w-full bg-sky-800 left-0 top-0 absolute transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45'></span>
          <span className='h-[1px] w-full bg-sky-800 left-0 top-1/2 absolute transition-opacity group-[.active]:opacity-0'></span>
          <span className='h-[1px] w-full bg-sky-800 left-0 bottom-0 absolute transition-transform group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45'></span>
        </button>
        <BurgerMenu open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
};

export default Header;
