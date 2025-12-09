'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface ListMobileItemProps {
  title: string;
  path:  string;
  menuState?: any;
}

export const ListMobileItem = ({ title, path, menuState }: ListMobileItemProps) => {

  const pathname = usePathname();

  const handleClick = () => {
    menuState(false);
  }

  return (
    <li onClick={ handleClick }>
      <Link 
        className={`block ${ (pathname === path) ? 'text-primary' : 'text-shadow-text-light' } text-base font-medium hover:text-primary transition-colors`}
        href={ path }
      >
        { title }
      </Link>
    </li>
  )
}

interface ListItemProps {
  title: string;
  path:  string;
  
}

export const ListItem = ({ title, path }: ListItemProps) => {

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

