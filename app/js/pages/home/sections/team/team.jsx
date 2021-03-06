import { h } from 'preact';
import TeamMember from './team_member';

const Team = () => {
  const members = [
    {
      name: 'Dennis Dias',
      image: 'assets/team/dennis.jpg',
      position: 'CEO',
      description: 'Extensive technology leadership experience - retired Navy Officer and strong passion for the sharing economy',
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
      name: 'Gary Abramson',
      image: 'assets/team/gary.jpg',
      position: 'CRO',
      description: 'ACAS, MAAA, 35+ years of actuarial experience.',
      // email: '',
      social: [
        { type: 'linkedin', link: '' },
      ],
    },
    // {
    //   name: 'Trenton Large',
    //   image: 'assets/team/trenton.jpg',
    //   position: 'CTO',
    //   description: 'Serial Entrepreneur, VC experience, Product Designer, and Skillful Coder. Extensive experience in API and securities technology.',
    //   email: 'trent@sharetempus.com',
    //   social: [
    //     { type: 'linkedin', link: 'https://www.linkedin.com/in/trentlarge' },
    //   ],
    // },
    {
      name: 'Ray Bryant',
      image: 'assets/team/ray.jpg',
      position: 'Strategic Advisor and Evangelist',
      description: 'A serial CEO with two successful exits, Ray has made a lifetime study of how to grow an organization. Since building his first transactional website in 1995, he has been responsible the sale of more than $40 million of products and services online.',
      // email: '',
      social: [
        { type: 'linkedin', link: '' },
      ],
    },
    // {
    //   name: 'Alan Ross',
    //   image: 'assets/team/alan.jpg',
    //   position: 'Strategic Advisor',
    //   // description: '',
    //   // email: '',
    //   social: [
    //     { type: 'linkedin', link: '' },
    //   ],
    // },
    {
      name: 'Ryan Kieff',
      image: 'assets/team/ryan.jpg',
      position: 'CTO & Full Stack Developer',
      description: '20+ years of product development, software engineering and technology experience.',
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
          An experienced team with 35+ years in the insurance industry.
        </p>
        <div className="members">
          {memberComponents}
        </div>
      </div>
    </section>
  );
};

export default Team;
