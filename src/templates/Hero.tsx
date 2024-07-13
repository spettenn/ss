import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white dark:bg-gray-800">
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

    <Section yPadding="pt-20 pb-20">
      <HeroOneButton
        title={
          <>
            {'Front-end developer\n'}
            <span className="text-primary-500">Aleksander Spetalen</span>
            <p className="flex flex-row flex-wrap items-center justify-center text-3xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
              slo
            </p>
          </>
        }
        description={
          <>
            <p>
              {
                'Tech enthusiast, UX enjoyer, and front-end developer. I create reliant, fast, conversion focused websites using the latest solutions.'
              }
            </p>
          </>
        }
        button={undefined}
      />
    </Section>
  </Background>
);

export { Hero };
