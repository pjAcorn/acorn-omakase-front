import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import Github from '../../assets/Github';

interface member {
  id: number;
  position?: string;
  name: string;
  url: string;
}

interface IntroTeamProps {
  title: string;
  members: member[];
  url: string;
}

interface MemberProps {
  position: string;
  name: string;
  url: string;
}

const IntroTeam = ({ title, members, url }: IntroTeamProps) => {
  return (
    <section className={styles.IntroTeam}>
      <div className={styles.IntroTeam__top}>
        <b className={styles.IntroTeam__title}>{title}</b>
        <Github url={url} />
      </div>
      <div className={styles.IntroTeam__bottom}>
        {members &&
          members.map((member: any) => {
            return (
              <Member
                key={member.id}
                position={member.position}
                name={member.name}
                url={member.url}
              />
            );
          })}
      </div>
    </section>
  );
};

const Member = ({ position, name, url }: MemberProps) => {
  return (
    <div className={styles.Member}>
      <b className={styles.Member__position}>{position}</b>
      <span className={styles.Member__name}>{name}</span>
      <Link to={`https://github.com/${url}`} style={{ textDecoration: 'none' }} target='_blank'>
        <span className={styles.Member__url}>github.com/{url}</span>
      </Link>
    </div>
  );
};
export default IntroTeam;