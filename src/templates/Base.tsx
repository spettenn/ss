import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className=" bg-white antialiased dark:bg-gray-800">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Projects />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
