import { h, Component } from 'preact';

class Faq extends Component {
  constructor() {
    super();

    this.state = {
      modules: [],
    };
  }

  // componentDidMount() {
  //   Promise.all([
  //     System.import('../../footer/footer'),
  //   ]).then((modules) => {
  //     this.setState({ modules: modules.map(m => m.default) });
  //   });
  // }

  render() {
    const { modules } = this.state;

    const sections = modules.map(Module => <Module />);

    return (
      <main className="sharetempus">
        <div>
          Faq
        </div>
      </main>
    );
  }
}

export default Faq;
