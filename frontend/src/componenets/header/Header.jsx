import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import logo from '/logo.png';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { isLoginSelector } from '../../Recoil/TokenAtom';

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["Contents", "Community", "Calendar"];
  const isLogin = useRecoilValue(isLoginSelector);

  const onOpen = () => {
    setHideLeft("left-0");
  }

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  }

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={logo} isLogin={isLogin}/>
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          logo={logo}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
          isLogin={isLogin}
        />
      </div>    
    </>
  );
}

export default Header;
