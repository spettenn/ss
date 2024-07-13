import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

import { Meta } from '../layout/Meta';
import Hero from './Hero';
import Me from './Me';

function Base() {
  return (
    <div className=" bg-white antialiased dark:bg-gray-800">
      {' '}
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Me />
      ABOUT ME
    </div>
  );
}

export default Base;
