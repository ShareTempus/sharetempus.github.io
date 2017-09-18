import { h, render } from 'preact';
import Home from './pages/home/home';
// import renderRoutes from './routes';
import '../sass/styles.scss';

// navigator.serviceWorker.register('./sw.js').then((reg) => {
//   console.log(`Registration succeeded. Scope is ${reg.scope}`);
// }).catch((err) => {
//   console.log(`Registration failed with ${err}`);
// });

render(
  <Home />,
  document.getElementById('root'),
);
