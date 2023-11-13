import { MainCTA, MainTitle, TechStack } from '@/components/organisms';
import { Layout } from '@/components/layouts';

const Home = () => {
  return (
    <Layout>
      <MainTitle />
      <TechStack />
      <MainCTA />
    </Layout>
  );
};

export default Home;
