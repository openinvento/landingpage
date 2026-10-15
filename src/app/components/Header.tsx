'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

interface HeaderProps {
  title: string
  logo?: string
  navigation: NavigationItem[]
}

export default function Header({ title, logo, navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow sticky w-full top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src={logo || "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"}
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-2xl font-bold">{title}</span>
            </a>
          </div>

          <div className="hidden lg:flex lg:space-x-8 items-center">
            {navigation.map((item) =>
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 font-semibold"
                >
                  {item.label}
                </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/30 z-50">
          <div className="fixed right-0 top-0 h-full w-full bg-white shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navigation.map((item) =>
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-2 py-2 text-gray-900 font-semibold rounded hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
