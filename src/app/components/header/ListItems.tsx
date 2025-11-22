import Link from "next/link";

interface Props {
  title: string;
  path:  string;
}

export const ListMobileItem = ({ title, path }: Props) => {
  return (
    <li>
      <Link 
        className="block text-white text-base font-medium hover:text-primary transition-colors"
        href={ path }
      >
        { title }
      </Link>
    </li>
  )
}

export const ListItem = ({ title, path }:Props) => {
  return (
    <Link 
      className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
      href={ path }
    >
      { title }
    </Link>
  )
}

