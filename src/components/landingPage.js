import React from 'react';

import Header from './header';
import SectionInfo from './sectionInfo';
import SectionDayByDay from './sectionDayByDay';
import SignUpForm from './signUpForm';

export default function LandingPage() {
  return (
    <div>
      <Header />
      <main role="main">
        <SectionInfo />
        <SectionDayByDay />
        <SignUpForm />
      </main>
    </div>
  );
}
