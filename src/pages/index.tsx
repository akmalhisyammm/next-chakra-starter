import { CTA, TechStack, Title } from 'components/home';
import Layout from 'components/layout';

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
