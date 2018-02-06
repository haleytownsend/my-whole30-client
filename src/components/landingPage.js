import React from 'react';

import Header from './header';
import SectionInfo from './sectionInfo';
import Recipes from './recipes';
import FavoriteRecipes from './favoriteRecipes';
import SignUpForm from './signUpForm';

export default function LandingPage() {
  return (
    <div>
      <Header />
      <main role="main">
        <SectionInfo />
        <Recipes />
        <FavoriteRecipes />
        <SignUpForm />
      </main>
    </div>
  );
}
