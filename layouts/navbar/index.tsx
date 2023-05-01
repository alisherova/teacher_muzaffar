import Link from 'next/link';
import { NavbarWrapper } from './style'

const Navbar = () => {
  return (
    <NavbarWrapper className='flex justify-around p-5'>
      <div key='logo'>
        <Link href='/'>
          <img src='/vercel.svg'
            alt='Logo'
            style={{ width: '50px' }} />
        </Link>
      </div>
      <div className="flex bg-red-400">
        <div key='home'
          style={{ marginRight: '0' }}>
          <Link href='/' className='text-red-400'>Home</Link>
        </div>
        <div key='courses'
          style={{ marginRight: '0' }}>
          <Link href='/courses'>Courses</Link>
        </div>
        <div key='profile'
          style={{ marginRight: '0' }}>

          <Link href='/profile'>Profile</Link>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;