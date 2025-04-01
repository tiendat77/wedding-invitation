import React from 'react';
import { Metadata } from 'next';

import SectionAlbum from '@/components/SectionAlbum';
import SectionCountDown from '@/components/SectionCountDown';
import SectionWhoWeAre from '@/components/SectionWhoWeAre';
import SectionOurStory from '@/components/SectionOurStory';
import SectionInvitation from '@/components/SectionInvitation';
import SectionWeddingEvents from '@/components/SectionWeddingEvents';
import SectionMemoryBook from '@/components/SectionMemoryBook';
import SectionThankYou from '@/components/SectionThankYou';
import Mute from '@/components/Mute';

/**
 * Metadata
 */
export const metadata: Metadata = {
  title: 'Thu An & Tiến Đạt | Wedding',
};

/**
 * Page
 */
export default function Page() {
  return (
    <>
      <SectionCountDown />
      <SectionInvitation />
      <SectionWeddingEvents />
      <SectionWhoWeAre />
      <SectionOurStory />
      <SectionAlbum />
      <SectionMemoryBook />
      <SectionThankYou />
      <Mute />
    </>
  );
}
