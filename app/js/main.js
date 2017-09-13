import { h, render } from 'preact';
import Site from './components/site';
import '../sass/styles.scss';

render(
  <Site />,
  document.getElementById('root'),
);
