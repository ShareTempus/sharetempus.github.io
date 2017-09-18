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
        className="link button button-primary"
        onClick={() => window.open('https://dashboard.sharetempus.com')}
      >
        Sign in
      </a>
    </div>
  </header>
);

export default Header;
