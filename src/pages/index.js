import Courses from '../components/Courses';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ScreensSection from '../components/ScreensSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ScreensSection />
      <Courses />
    </Layout>
  );
}
