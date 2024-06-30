'use client';

import { ErrorPage } from '@/components/templates';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '500',
};

const _Error = () => {
  return <ErrorPage />;
};

export default _Error;
