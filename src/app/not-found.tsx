import { NotFoundPage } from '@/components/templates';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
