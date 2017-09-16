import { h } from 'preact';

const ChartIcon = () => (
  <div className="box-icon chart-icon">
    <svg
      className="icon"
      version="1.1"
      baseProfile="full"
      viewBox="0 0 100 100"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="22.5" y1="91" x2="22.5" y2="62" strokeWidth="10" strokeLinecap="butt" className="chart-line" />
      <line x1="42.5" y1="91" x2="42.5" y2="37" strokeWidth="10" strokeLinecap="butt" className="chart-line" />
      <line x1="62.5" y1="91" x2="62.5" y2="46" strokeWidth="10" strokeLinecap="butt" className="chart-line" />
      <line x1="82.5" y1="91" x2="82.5" y2="23" strokeWidth="10" strokeLinecap="butt" className="chart-line" />
      <line x1="5" y1="95" x2="5" y2="5" strokeWidth="5" className="chart-scale" />
      <line x1="2.5" y1="95" x2="100" y2="95" strokeWidth="5" className="chart-scale" />
    </svg>
  </div>
);

export default ChartIcon;
