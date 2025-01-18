'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { DashboardOutlined, HomeFilled, BugOutlined, BarChartOutlined } from '@ant-design/icons';
import './style.css';

const links = [
    {
        name: 'Dashboard', href: '/dashboard', icon: DashboardOutlined
    },
    {
        name: 'Pipelines', href: '/pipelines', icon: HomeFilled
    },
    {
        name: 'Exceptions', href: '/exceptions', icon: BugOutlined
    },
    {
        name: 'Reference Data', href: '/reference-data', icon: BarChartOutlined
    },
  
];

export default function NavItems({ collapsedSideBar = false }: { collapsedSideBar: boolean }) {
    const pathname = usePathname();
    return (
        <div className={"navItemsContainer"}>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "navLink",
                            pathname === link.href ? "navLinkActive" : "navLinkText",
                            "navLinkHover"
                        )}
                    >
                        <LinkIcon className={"navLinkIcon"} />
                        {!collapsedSideBar && <p className={"navLinkTextExpanded"}>{link.name}</p>}
                    </Link>
                );
            })}
        </div>
    );
}
