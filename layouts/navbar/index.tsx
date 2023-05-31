import Button from '@/components/common/button';
import Link from 'next/link';
import { NavbarWrapper, NavigatorLinks } from './style';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div key='logo'>
        <Link href='/'>
          <img src='/vercel.svg'
            alt='Logo'
            style={{ width: "100px" }}
          />
        </Link>
      </div>
      <NavigatorLinks className="gap-3 bg-slate-600">
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/courses'>About us</Link></li>
        <li><Link href='/courses'>Reviews</Link></li>
        <li><Link href='/login'>Login</Link></li>
        <li><Link href='/profile'>Profile</Link></li>
        <Button text={'Sign up'} />
      </NavigatorLinks>
    </NavbarWrapper>
  );
};

export default Navbar;