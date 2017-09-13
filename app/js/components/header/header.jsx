import { h } from 'preact';

const Header = () => (
  <header className="header">
    <div className="links">
      <a
        className="link"
        onClick={() => window.open('https://docs.sharetempus.com')}
      >
        API docs
      </a>
      <a
        className="link"
        onClick={() => window.open('https://dashboard.sharetempus.com')}
      >
        Sign in &rarr;
      </a>
    </div>
  </header>
);

export default Header;
