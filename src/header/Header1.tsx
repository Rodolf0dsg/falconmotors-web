'use client';
import { useEffect, useState } from 'react';
import { ListItem, ListMobileItem } from '../app/components/header/ListItems';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { title: 'Inicio', path: '/' },
  { title: 'Automoviles', path: '/vehicles' },
  { title: 'Servicios', path: '/services' },
  { title: 'Contacto', path: '/contact' },
  // { title: 'Accesorios', path: '/accesories' }, //TODO en un futuro
];

export const Header1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link href={'/'}>
                  <Image
                    src={'/logos/Logo-white.png'}
                    alt='Logo'
                    width={100}
                    height={40}
                    className='absolute -top-5 object-contain'
                  />
                </Link>
              </div>
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
              <button
                className="cursor-pointer text-black"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-card-light z-60 shadow-lg 
          transform transition-transform duration-300 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-400">
            <h2 className="text-black text-lg font-bold">Menú</h2>
            <button
              className="cursor-pointer text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="grow p-6">
            <ul className="flex flex-col gap-6">
              {navItems.map(item => (
                <li key={item.path}>
                  <ListMobileItem
                    title={item.title}
                    path={item.path}
                    menuState={setIsMenuOpen}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-400">
            <Link
              href="/services#form"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
            >
              <span className="truncate">Agendar una cita</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}