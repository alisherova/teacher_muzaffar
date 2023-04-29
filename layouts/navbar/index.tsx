import Link from 'next/link';
import {Menu} from 'antd';
import {UserOutlined, InfoCircleOutlined} from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu mode='horizontal'
          style={{display: 'flex', justifyContent: 'space-between'}}>
      <Menu.Item key='logo'>
        <Link href='/'>
          <img src='/vercel.svg'
               alt='Logo'
               style={{width: '50px'}}/>
        </Link>
      </Menu.Item>
      <div>
        <Menu.Item key='home'
                   style={{marginRight: '0'}}>
          <Link href='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='courses'
                   style={{marginRight: '0'}}>
          <Link href='/courses'>Courses</Link>
        </Menu.Item>
        <Menu.Item key='profile'
                   icon={<UserOutlined/>}
                   style={{marginRight: '0'}}>
          <Link href='/profile'>Profile</Link>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Navbar;