import { h } from 'preact';

const Laptop = () => (
  <div className="laptop">
    <span className="shadow" />
    <span className="lid" />
    <span className="camera" />
    <span className="screen" />
    <span className="chassis">
      <span className="keyboard" />
      <span className="trackpad" />
    </span>
  </div>
);

export default Laptop;
