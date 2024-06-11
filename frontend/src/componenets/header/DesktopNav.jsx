import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginSelector, TokenAtom } from '../../Recoil/TokenAtom';

const DesktopNav = ({ menuItems, logo }) => {
  const isLogin = useRecoilValue(isLoginSelector);
  const setAcessToken = useSetRecoilState(TokenAtom);

  const handleLogout = () => {
    setAcessToken(undefined);
  };

  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12 shadow">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="ml-1"><em>All Tips for your life in Korea</em></div>
      </div>

      <ul className='flex gap-7'>
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className='font-medium capitalize text-secondary'>{menu}</Link>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-4 font-medium'>
        {isLogin ? (
          <>
            <li>
              <Link to={"/mypage"}>
                <button className='text-secondary px-4 py-2 rounded'>My Page</button>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className='text-secondary px-4 py-2 rounded'>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>
                <button className='text-secondary px-4 py-2 rounded'>Sign in</button>
              </Link>
            </li>
            <li>
              <Link to={"/registration"}>
                <button className='text-secondary px-4 py-2 rounded'>Sign up</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default DesktopNav;
