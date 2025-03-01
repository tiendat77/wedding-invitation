import React from 'react';
import { Metadata } from 'next';

import SectionCountDown from '@/components/SectionCountDown';
import SectionWhoWeAre from '@/components/SectionWhoWeAre';
import SectionOurStory from '@/components/SectionOurStory';
import SectionInvitation from '@/components/SectionInvitation';
import SectionContacts from '@/components/SectionContacts';
import SectionWeddingMonetaryGift from '@/components/SectionWeddingMonetaryGift';

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
      <SectionInvitation />
      <SectionWhoWeAre />
      <SectionOurStory />
      <SectionContacts />
      <SectionWeddingMonetaryGift />
    </>
  );
}
