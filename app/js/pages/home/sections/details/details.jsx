import { h } from 'preact';
import {
  DescriptionIcon,
  SettingsIcon,
  VerifiedUserIcon,
} from '../../../../components';

const Details = () => (
  <section className="details">
    <div className="content">
      <div className="feature">
        <div className="heading">
          <VerifiedUserIcon />
          <h3 className="title">Confidence as a Service</h3>
        </div>
        <p>
          Sharetempus integrates directly into marketplace platforms, providing protection underwriting for fraud, item damage, and stolen goods. No more risk for users. No more worried customers.
        </p>
      </div>
      <div className="feature">
        <div className="heading">
          <DescriptionIcon />
          <h3 className="title">Safety as a Matchmaker</h3>
        </div>
        <p>
          Our seamless solution matches platforms to underwriting partners. Our Patent Pending flow allows us to instantly issue protection policies on every transaction sold on a platform.
        </p>
      </div>
      <div className="feature">
        <div className="heading">
          <SettingsIcon />
          <h3 className="title">Fulfillment as an API</h3>
        </div>
        <p>
          Our system is built to be integrated in just a few lines of code. ShareTempus handles all underwriting, fraud detection, and policy claims with little required input from partner organizations.
        </p>
      </div>
    </div>
  </section>
);

export default Details;
