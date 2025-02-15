import React from 'react';
import { Metadata } from 'next';

import SectionCountDown from '@/components/SectionCountDown';

/**
 * Metadata
 */
export const metadata: Metadata = {
  title: 'Tiến Đạt & Thu An | Wedding',
};

/**
 * Page
 */
export default function Page() {
  return (
    <>
      <SectionCountDown />
    </>
  );
}
