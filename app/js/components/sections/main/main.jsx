import { h, Component } from 'preact';
import Logo from '../../common/logo';
import World from './world';

class Main extends Component {
  componentDidMount() {
    this.runWorldAnimation();
  }

  runWorldAnimation() {
    for (let i = 0; i < 15; i += 1) {
      const randomR = Math.round(Math.random() * 60);
      const randomD = Math.round(Math.random() * 60);
      const continents = [
        'north-america',
        'south-america',
        'europe',
        'africa',
        'asia',
        'australia',
      ];
      const randomContinent = continents[Math.round(Math.random() * 5)];
      const className = `.r${randomR}d${randomD}.${randomContinent}`;
      const $el = document.querySelector(className);

      if ($el) {
        const hasClass = Array.from($el.classList).indexOf('animation') >= 0;
        if (hasClass) {
          $el.classList.remove('animation');
        }

        $el.classList.add('animation');
      }
    }

    setTimeout(() => {
      this.runWorldAnimation();
    }, 1000);
  }

  render() {
    return (
      <section className="main">
        <World />
        <div className="content">
          <Logo />
          <p className="description">
            Bringing protection to the shared economy
          </p>
        </div>
      </section>
    );
  }
}

export default Main;
