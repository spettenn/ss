import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white dark:bg-gray-800">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-20">
      <HeroOneButton
        title={
          <>
            {'Front-end developer\n'}
            <span className="text-primary-500">Aleksander Spetalen</span>
          </>
        }
        description={
          <p>
            Tech enthusiast, UX enjoyer, and front-end developer. I create
            reliant, fast, conversion focused websites using the latest
            solutions.
          </p>
        }
        button={
          <Link href="#">
            <Button xl>Yeppers</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
