import Link from 'next/link';
import { FC } from 'react';

interface IBurgerMenu {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
}
const BurgerMenu: FC<IBurgerMenu> = ({ open, setOpen }) => {
  return (
    <nav
      onClick={() => setOpen(!open)}
      className={
        (open ? 'visible ' : 'hidden ') +
        'bg-heroGradient fixed left-0 right-0 top-0 bottom-0 flex justify-center sm:hidden '
      }
    >
      <ul className='flex flex-col justify-center items-center gap-5 pt-10'>
        <li>
          <Link onClick={() => setOpen(!open)} className='text-2xl font-semibold text-white' href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(!open)}
            className='text-2xl font-semibold text-white'
            href='/dashboard'
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(!open)}
            className='text-2xl font-semibold text-white'
            href='/dashboard/settings'
          >
            D settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
