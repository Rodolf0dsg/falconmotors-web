'use client';
import { useEffect, useState } from 'react';
import { ListMobileItem, ListItem } from '../app/components/header/ListItems';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { title: 'Inicio', path: '/' },
  { title: 'Automoviles', path: '/vehicles' },
  { title: 'Servicios', path: '/services' },
  { title: 'Accesorios', path: '/accesories' },
  { title: 'Contacto', path: '/contact' }
];

export const Header1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > scrollThreshold);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-colors duration-600";
  const scrolledClasses = "bg-background-light/30 backdrop-blur-sm shadow-md border-gray-800";
  const transparentClasses = "bg-transparent";

  return (
    <>
      {/* HEADER */}
      <header className={`${baseClasses} ${isScrolled ? scrolledClasses : transparentClasses}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4 text-white">
              <div className="h-6 w-40 text-primary relative">
                {/* <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" />
                </svg> */}
                <Link href={'/'}>
                  <Image
                    src={'/logos/Logo-white.png'}
                    alt='Logo'
                    width={ 100 }
                    height={ 40 }
                    className='absolute -top-5 object-contain'
                  />
                </Link>
              </div>
              {/* <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">FalconMotors</h2> */}
            </div>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map(item => (
                <ListItem key={item.path} title={item.title} path={item.path} />
              ))}
            </nav>

            {/* Botón cita */}
            <div className="hidden lg:flex items-center">
              <Link href={'/services#form'}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors">
                <span className="truncate">Agendar una cita</span>
              </Link>
            </div>

            {/* Botón hamburguesa */}
            <div className="lg:hidden">
              <label className="cursor-pointer text-black" htmlFor="mobile-menu-toggle">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay + Sidebar fuera del header */}
      <div className="lg:hidden">
        <input className="hidden" id="mobile-menu-toggle" type="checkbox" />

        {/* Overlay */}
        <label
          className="fixed inset-0 z-40 bg-black bg-opacity-50 opacity-0 invisible transition-opacity duration-300"
          htmlFor="mobile-menu-toggle"
          id="mobile-menu-overlay">
        </label>

        {/* Sidebar */}
        <div
          className="fixed top-0 right-0 h-full w-72 bg-card-light z-60 shadow-lg transition-transform duration-300"
          id="mobile-menu-sidebar">
          <div className="flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-400">
              <h2 className="text-black text-lg font-bold">Menú</h2>
              <label className="cursor-pointer text-gray-600" htmlFor="mobile-menu-toggle">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
            <nav className="grow p-6">
              <ul className="flex flex-col gap-6">
                {navItems.map(item => (
                  <ListMobileItem key={item.path} path={item.path} title={item.title} />
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t border-gray-400">
              <Link href="/services#form"
                className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary  text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors">
                <span className="truncate">Agendar una cita</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}