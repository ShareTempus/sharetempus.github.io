import { h } from 'preact';
import Header from '../header/header';

const App = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default App;
