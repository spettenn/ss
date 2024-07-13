import Link from 'next/link';
import React from 'react';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

const Hero = () => (
  <div>
    {' '}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/spettenn">GitHub</Link>
        </li>
        <li>
          <Link href="/about">About me</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </div>
);

export default Hero;
