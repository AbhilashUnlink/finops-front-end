'use client'

import { BellOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { useState } from 'react';
import SideNav from '../side-nav/SideNav';
import "./style.css"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const [collapsedSideBar, setCollapsedSideBar] = useState(false);

  return (
    <>
      <div className={"layout"}>
        <div
          className={`${"sideNavContainer"} ${collapsedSideBar ? "sideNavCollapsed" : "sideNavExpanded"}`}
        >
          <SideNav {...{ collapsedSideBar, setCollapsedSideBar }} />
        </div>

        <div
          className={`${"mainContent"} ${collapsedSideBar ? "mainContentExpanded" : "mainContentCollapsed"}`}
        >
          <div className={"header"}>
            <div className={"headerLeft"}></div>
            <div className={"headerRight"}>
              <BellOutlined />
              <Button type="text" className={"avatarButton"}>
                <Avatar
                  size="small"
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
                Dheeraj Singh
                <CaretDownOutlined />
              </Button>
            </div>
          </div>
          <div className={"contentContainer"}>
            <div className={"contentBackground"}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
