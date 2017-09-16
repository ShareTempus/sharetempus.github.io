import { h } from 'preact';
import { EmailIcon, LinkedinIcon } from '../common';

const Footer = () => (
  <footer className="footer">
    <hr />
    <div className="content">
      <span className="copyright">
        © ShareTempus
      </span>
      <div className="buttons">
        <a
          className="social-link"
          href="mailto:webmaster@sharetempus.com"
        >
          <EmailIcon />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/company-beta/10903805"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
