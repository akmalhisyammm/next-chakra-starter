import Layout from 'components/layout';
import { CTA, TechStack, Title } from 'components/home';

const Home = () => {
  return (
    <Layout>
      <Title />
      <TechStack />
      <CTA />
    </Layout>
  );
};

export default Home;
