import React from 'react';
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Second from './sections/Second.jsx';
import Third from './sections/Third.jsx';
import Fourth from './sections/Fourth.jsx';
import Fifth from './sections/Fifth.jsx';
import Six from './sections/Six.jsx';
import Seven from './sections/Seven.jsx';
import Eight from './sections/Eight.jsx';
import Nine from './sections/Nine.jsx';
import Last from './sections/Last.jsx';

export default function App() {
  return (
    <RootLayout>
      <Home />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Last />
    </RootLayout>
  );
}
