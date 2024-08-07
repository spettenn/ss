import Link from 'next/link';
import type { ReactNode } from 'react';

import DarkModeToggle from '../button/DarkModeToggle';
import EmployerStatus from '../feature/JobbStatus';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between ">
    <div className="flex flex-row">
      <Link href="/">{props.logo}</Link>

      <EmployerStatus
        status="employed"
        info="Currently working for Norwegian Lab"
      />
    </div>

    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-gray-800">
        {props.children}

        <DarkModeToggle />
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
