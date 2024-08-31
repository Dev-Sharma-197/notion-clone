'use client';

import { SignInButton, UserButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { useScrollTop } from '@/hooks/useScrollTop';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';

import Logo from './Logo';

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const scrolled = useScrollTop();

  return (
    <div className={cn('z-50 fixed top-0 flex items-center w-full p-6 backdrop-blur-8 bg-backdrop-color', scrolled && 'border-b shadow-sm')}>
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode='modal'>
            <Button variant='ghost' size='sm'>
              Log in
            </Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <div className="flex-grow md:flex-grow-0">
              <UserButton afterSignOutUrl='/' />
            </div>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/documents'>Enter Jotion</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
