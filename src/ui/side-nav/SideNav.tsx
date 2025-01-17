/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PoweroffOutlined } from "@ant-design/icons";
import NavItems from "./NavItems";
import AppLogo from "../app-logo/AppLogo";
import './style.css';

export default function SideNav({ collapsedSideBar, setCollapsedSideBar }: any) {
    return (
        <div className={"sideNavContainer"}>
            <AppLogo collapsedSideBar={collapsedSideBar} setCollapsedSideBar={setCollapsedSideBar} />

            <div className={`${"sideNavContent"} ${collapsedSideBar ? '' : "sideNavContentMobile"}`}>
                <NavItems collapsedSideBar={collapsedSideBar} />
                <div className={"hiddenMobile"}></div>

                <button
                    className={`${"signOutButton"} ${"signOutButtonHover"} ${collapsedSideBar ? '' : "signOutText"}`}
                >
                    <PoweroffOutlined className={"signOutButtonIcon"} />
                    {!collapsedSideBar && <div className={"signOutText"}>Sign Out</div>}
                </button>
            </div>
        </div>
    );
}
