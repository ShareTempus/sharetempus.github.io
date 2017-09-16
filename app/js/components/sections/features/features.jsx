import { h } from 'preact';
import Laptop from '../../common/laptop';
import { ChartIcon } from '../../common';

const Features = () => (
  <section className="features">
    <div className="column">
      <div className="content">
        <div className="heading">
          <ChartIcon />
          <h3 className="title">Dashboard Analytics</h3>
        </div>
        <p>
          Adding ShareTempus allows you to offer a protection solution to your transaction process in the same easy way that you might add credit card processing. We aim to bring world-class assurance to your platform, without the headache of traditional insurance solutions.
        </p>
        <p>
          When you integrate our API, we go to work handling all issuance and claims issues. You send us transaction details, we send you a JSON with the resulting policy, and your platform dashboard analytics are concurrently updated!
        </p>
      </div>
    </div>
    <div className="column">
      <Laptop />
    </div>
  </section>
);

export default Features;
