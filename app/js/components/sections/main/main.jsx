import { h, Component } from 'preact';
import { Logo } from '../../common';
import World from './world';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      Video: undefined,
      opened: false,
    };

    this.toggleVideoContainer = this.toggleVideoContainer.bind(this);
  }

  componentDidMount() {
    this.runWorldAnimation();

    System.import('./video').then((module) => {
      this.setState({ Video: module.default });
    });
  }

  toggleVideoContainer(opened) {
    this.setState({ opened });
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
    const { Video, opened } = this.state;

    return (
      <section className="main">
        <World />
        <div className="content">
          <Logo />
          <p className="description">
            Bringing protection to the shared economy
          </p>
          <div>
            <a
              className="button button-primary"
              onClick={() => this.toggleVideoContainer(true)}
            >
              Watch the video
            </a>
          </div>
          <Video
            opened={opened}
            toggleVideoContainer={this.toggleVideoContainer}
          />
        </div>
      </section>
    );
  }
}

export default Main;
