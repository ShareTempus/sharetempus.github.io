import { h } from 'preact';

const GettingStart = () => (
  <section className="getting-start">
    <div className="content">
      <h1 className="title">
        Ready to get started?
      </h1>
      <div className="buttons">
        <a
          className="button button-primary"
          onClick={() => window.open('https://dashboard.sharetempus.com')}
        >
          Create account
        </a>
        <a
          className="button button-secondary"
          href="mailto:webmaster@sharetempus.com"
        >
          Contact US
        </a>
      </div>
    </div>
  </section>
);

export default GettingStart;
