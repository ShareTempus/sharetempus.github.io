import { h } from 'preact';
import { Router, hashHistory } from 'react-router';
import App from './pages/app';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./pages/home/home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/faq',
      getComponent(location, cb) {
        System.import('./pages/faq/faq')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};

const renderRoutes = () => (
  <Router history={hashHistory} routes={routes} />
);

export default renderRoutes;
