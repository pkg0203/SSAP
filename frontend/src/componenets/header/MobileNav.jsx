import React from 'react';
import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { TokenAtom } from '../../Recoil/TokenAtom';

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen, isLogin }) => {
  const resetToken = useResetRecoilState(TokenAtom);

  const handleLogout = () => {
    resetToken();
    // 로그아웃 후 추가 작업이 필요하면 여기에 추가합니다.
  };

  return (
    <div>
      <div className="flex justify-between items-center px-6 py-4 shadow">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <button onClick={onOpen} className="text-secondary">Menu</button>
      </div>
      <div className={`fixed top-0 ${hideLeft} transition-left duration-300 bg-white w-full h-full z-10`}>
        <button onClick={onClose} className="text-secondary">Close</button>
        <ul className="flex flex-col items-center gap-4 font-medium mt-6">
          {menuItems?.map((menu, index) => (
            <li key={index}>
              <Link to={menu} onClick={onClose} className='font-medium capitalizetext-secondary'>{menu}</Link>
            </li>
          ))}
          {isLogin ? (
            <>
              <li>
                <Link to={"/mypage"}>
                  <button onClick={onClose} className='text-secondary px-4 py-2 rounded'>My page</button>
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
                  <button onClick={onClose} className='text-secondary px-4 py-2 rounded'>Sign in</button>
                </Link>
              </li>
              <li>
                <Link to={"/registration"}>
                  <button onClick={onClose} className='text-secondary px-4 py-2 rounded'>Sign up</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
