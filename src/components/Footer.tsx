import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-8 border-t'>
      <nav>
        <ul className='flex justify-center gap-10 text-lg font-medium'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href='/dashboard/settings'>Dashboard Settings</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
