import { h } from 'preact';

const TeamMember = ({
  image,
  name,
  position,
  description,
}) => (
  <div className="member">
    <img
      className="image"
      src={image}
      alt={name}
    />
    <div className="name">
      {name}
    </div>
    <div className="position">
      {position}
    </div>
    {
      description && (
        <div className="member-details">
          <div className="name">
            {name}
          </div>
          <div className="position">
            {position}
          </div>
          <div className="description">
            {description}
          </div>
        </div>
      )
    }
  </div>
);

export default TeamMember;
