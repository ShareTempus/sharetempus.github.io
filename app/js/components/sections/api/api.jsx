import { h, Component } from 'preact';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

const codes = [
  `var ShareTempus = require('sharetempus')('sk_test_BWLY8F59QFqgrhfaH8qbXDth');

ShareTempus.customers.create({
  email: 'email@test.com',
  legalEntity: {
    type: 'individual',
    firstName: 'Trenton',
    lastName: 'Large',
    birthdate: 637124400000,
    ssnLast4: '1234',
    address: {
      city: 'New York City',
      country: 'US',
      line1: 'East 169th Street',
      line2: 'Apt. 2A Bronx',
      postalCode: '10456',
      state: 'New York'
    }
  }
}).then(function(customer) {
  console.log(customer);
}).catch(function(error) {
  console.log(error);
});`,
  `var ShareTempus = require('sharetempus')('sk_test_BWLY8F59QFqgrhfaH8qbXDth');

ShareTempus.policies.quote({
  customer: 'cus_dD2r2Ib8kPMhg5C3YvlqRwb7',
  currency: 'usd',
  startDate: 1474473004564,
  endDate: 1475473004564,
  product: {
    name: 'iPhone 7',
    category: 'Electronics',
    subcategory: 'Cell Phones & Accessories',
    manufacturer: 'Apple',
    value: 64900
  },
  description: 'Policy for iPhone 7',
  metadata: {}
}).then(function(quote) {
  console.log(quote);
}).catch(function(error) {
  console.log(error);
});`,
  `var ShareTempus = require('sharetempus')('sk_test_BWLY8F59QFqgrhfaH8qbXDth');

ShareTempus.policies.create({
  token: 'tok_Q1gBkjj8wdAkOg0pj8bf8uQO'
}).then(function(policy) {
  console.log(policy);
}).catch(function(error) {
  console.log(error);
});`,
];

class API extends Component {
  constructor() {
    super();

    this.state = {
      code: codes[0],
      selectedCode: '0',
      updated: true,
    };
  }

  setCode(index) {
    this.setState({
      updated: false,
      code: codes[index],
      selectedCode: index,
    }, () => {
      this.setState({ updated: true });
    });
  }

  render() {
    const { code, updated, selectedCode } = this.state;
    const options = {
      lineNumbers: true,
      mode: 'javascript',
    };
    const codeOptions = [
      { label: 'Create a Customer', value: '0' },
      { label: '&rarr;' },
      { label: 'Generate a Quote', value: '1' },
      { label: '&rarr;' },
      { label: 'Create a Policy', value: '2' },
    ];
    const mobileOptions = codeOptions.filter(option => option.value).map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ));
    const desktopOptions = codeOptions.map((option) => {
      const { label, value } = option;
      const selected = value === selectedCode;

      if (value) {
        return (
          <li key={value} className={`option ${selected ? 'selected' : ''}`}>
            <a onClick={() => this.setCode(value)}>
              {label}
            </a>
          </li>
        );
      }

      return <li key={value} className="option">&rarr;</li>;
    });

    return (
      <section className="api">
        <div className="heading">
          <h1 className="title">
            Fits within your workflow
          </h1>
          <p className="description">
            Our system is built to be integrated in just a few lines of code. ShareTempus handles all underwriting, fraud detection, and policy claims with little required input from partner organizations.
          </p>
        </div>
        <div className="content">
          <select
            className="mobile-options"
            onChange={e => this.setCode(e.target.value)}
            value={selectedCode}
          >
            {mobileOptions}
          </select>
          <ul className="options">
            {desktopOptions}
          </ul>
          {
            updated &&
            <CodeMirror
              className="api-codemirror"
              value={code}
              options={options}
            />
          }
        </div>
      </section>
    );
  }
}

export default API;
