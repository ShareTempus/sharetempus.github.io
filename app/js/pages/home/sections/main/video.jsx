import { h, Component } from 'preact';

class Video extends Component {
  constructor() {
    super();

    this.setVideo = this.setVideo.bind(this);
    this.onContainerClick = this.onContainerClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.opened) {
      document.body.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      document.querySelector('header').style.display = 'none';
      this.video.play();
    } else {
      document.body.style.overflow = 'auto';
      document.querySelector('header').style.display = 'flex';
    }
  }

  onContainerClick(e) {
    const target = e.target;
    const classList = Array.from(target.classList);

    if (classList.indexOf('sharetempus-video') < 0) {
      this.video.pause();
      this.props.toggleVideoContainer(false);
    }
  }

  setVideo(video) {
    this.video = video;
  }

  render() {
    const { opened } = this.props;

    return (
      <div
        className={`modal-video-container ${opened ? 'opened' : ''}`}
        onClick={this.onContainerClick}
      >
        <div className="container">
          <video
            id="sharetempusVideo"
            className="sharetempus-video"
            ref={video => this.setVideo(video)}
            poster="assets/video.png"
            onClick={() => this.video.play()}
            controls
          >
            <source type="video/mp4" src="assets/video.mp4" />
          </video>
        </div>
      </div>
    );
  }
}

// Video.propTypes = {
//   opened: PropTypes.bool.isRequired,
//   toggleVideoContainer: PropTypes.func.isRequired,
// };

export default Video;
