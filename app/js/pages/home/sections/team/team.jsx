import { h } from 'preact';
import TeamMember from './team_member';

const Team = () => {
  const members = [
    {
      name: 'Dennis Dias',
      image: 'assets/team/dennis.jpg',
      position: 'CEO',
      description: 'Retired US Navy Officer. Extensive software developer leadership experience. Sharing Economy connoisseur.',
      email: 'dennis@sharetempus.com',
      social: [
        { type: 'linkedin', link: '' },
      ],
    },
    {
      name: 'Nigel Bailey',
      image: 'assets/team/nigel.jpg',
      position: 'COO',
      description: '35+ year global insurance industry leader and former regulator. Specializes in insurance company regulations.',
      email: 'nigel@sharetempus.com',
      social: [
        { type: 'linkedin', link: 'https://www.linkedin.com/in/nigel-bailey-b7b4b519' },
      ],
    },
    {
      name: 'Jim Byerly',
      image: 'assets/team/jim.jpg',
      position: 'CFO',
      description: '35+ year insurance/financial services leader with extensive insurance industry experience, MBA, CPA, and CGMA.',
      email: 'jim@sharetempus.com',
      social: [
        { type: 'linkedin', link: 'https://www.linkedin.com/in/jim-byerly-2b7b8b23' },
      ],
    },
    {
      name: 'Will Ferrier',
      image: 'assets/team/will.jpg',
      position: 'CMO',
      description: 'Former Intel Marketing Executive, Entrepreneur, and Innovation Evangelist.',
      // email: '',
      social: [
        { type: 'linkedin', link: 'https://www.linkedin.com/in/willferrier/' },
      ],
    },
    {
      name: 'Trenton Large',
      image: 'assets/team/trenton.jpg',
      position: 'CTO',
      description: 'Serial Entrepreneur, VC experience, Product Designer, and Skillful Coder. Extensive experience in API and securities technology.',
      email: 'trent@sharetempus.com',
      social: [
        { type: 'linkedin', link: 'https://www.linkedin.com/in/trentlarge' },
      ],
    },
    {
      name: 'Alan Ross',
      image: 'assets/team/alan.jpg',
      position: 'CISO',
      // description: '',
      // email: '',
      social: [
        { type: 'linkedin', link: '' },
      ],
    },
    {
      name: 'Ryan Kieff',
      image: 'assets/team/ryan.jpg',
      position: 'Full Stack Developer',
      // description: '',
      // email: '',
      social: [
        { type: 'linkedin', link: '' },
      ],
    },
    {
      name: 'Lucas Bassetti',
      image: 'assets/team/lucas.jpg',
      position: 'Full Stack Developer',
      // description: '',
      // email: '',
      social: [
        { type: 'linkedin', link: '' },
      ],
    },
  ];

  const memberComponents = members.map(member => (
    <TeamMember key={member.name} {...member} />
  ));

  return (
    <section className="team">
      <div className="content">
        <h1 className="title">Who we are</h1>
        <p className="description">
          An experienced team with 35+ year insurance industry.
        </p>
        <div className="members">
          {memberComponents}
        </div>
      </div>
    </section>
  );
};

export default Team;
