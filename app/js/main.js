import { h, render } from 'preact';
import Site from './components/site';
import '../sass/styles.scss';

// navigator.serviceWorker.register('./sw.js').then((reg) => {
//   console.log(`Registration succeeded. Scope is ${reg.scope}`);
// }).catch((err) => {
//   console.log(`Registration failed with ${err}`);
// });

render(
  <Site />,
  document.getElementById('root'),
);
