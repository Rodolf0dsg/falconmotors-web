'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  path:  string;
}

export const ListMobileItem = ({ title, path }: Props) => {

  const pathname = usePathname();

  return (
    <li>
      <Link 
        className={`block ${ (pathname === path) ? 'text-primary' : 'text-shadow-text-light' } text-base font-medium hover:text-primary transition-colors`}
        href={ path }
      >
        { title }
      </Link>
    </li>
  )
}

export const ListItem = ({ title, path }:Props) => {

  const pathname = usePathname();

  return (
    <Link 
      className={`${ (pathname === path) ? 'text-primary' : 'text-shadow-text-light' } font-medium leading-normal hover:text-primary transition-colors`}
      href={ path }
    >
      { title }
    </Link>
  )
}

