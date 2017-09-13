import { h } from 'preact';
import Footer from './footer/footer';
import Header from './header/header';
import {
  API,
  Features,
  Main,
} from './sections';

const Site = () => (
  <main className="sharetempus">
    <Header />
    <Main />
    <API />
    <Features />
    <Footer />
  </main>
);

export default Site;
