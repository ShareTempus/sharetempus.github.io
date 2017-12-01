import { h, Component } from 'preact';
import Header from '../../header/header';
import Main from './sections/main/main';
import Details from './sections/details/details';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      modules: [],
    };
  }

  componentDidMount() {
    Promise.all([
      System.import('./sections/api/api'),
      System.import('./sections/features/features'),
      System.import('./sections/platforms/platforms'),
      System.import('./sections/team/team'),
      System.import('./sections/getting_start/getting_start'),
      System.import('../../footer/footer'),
    ]).then((modules) => {
      this.setState({ modules: modules.map(m => m.default) });
    });
  }

  render() {
    const { modules } = this.state;

    const sections = modules.map(Module => <Module />);

    return (
      <main className="sharetempus">
        <Header />
        <Main />
        <Details />
        {sections}
      </main>
    );
  }
}

export default Home;
