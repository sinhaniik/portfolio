import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-5xl bg-surface/90 dark:bg-muted/90 backdrop-blur-xl border border-muted dark:border-text-muted/30 rounded-2xl transition-all duration-150 shadow-[0_2px_12px_rgba(86,28,36,0.08)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="px-6 md:px-8 flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-primary">Nikhil</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-text-muted'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-muted dark:border-text-muted/30 transition-colors duration-150">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-text-muted'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
