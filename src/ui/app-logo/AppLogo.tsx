/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import LOGO from "../../assets/logo.png";
import './style.css';

export default function AppLogo({ collapsedSideBar, setCollapsedSideBar }: any) {
    return (
        <div className={"logo-container"}>
            {!collapsedSideBar && (
                <Link
                    className={"logoLink"}
                    href="/"
                    style={{ textDecoration: 'none' }}
                >
                    <Image
                        src={LOGO}
                        width={50}
                        height={20}
                        alt='Picture of the author'
                    />
                    <p className={"logoText"}>FINOPS</p>
                </Link>
            )}
            <div className={"iconContainer"}>
                <MenuOutlined
                    className={collapsedSideBar ? "iconExpanded" : "iconCollapsed"}
                    onClick={() => {
                        setCollapsedSideBar((prev: any) => !prev);
                    }}
                />
            </div>
        </div>
    );
}
