import styles from './style.module.scss';
import SymbolTextLogo from '../../assets/SymbolTextLogo';
import IntroTeam from '../../components/IntroTeam';

const Members = [
    {
      id: 1,
      position: '팀장',
      name: '조건희',
      url: 'gunhee93',
    },
    {
      id: 2,
      name: '노현경',
      url: 'nhk1657',
    },
    {
      id: 3,
      name: '전대웅',
      url: 'jundanny',
    },
    {
      id: 4,
      name: '정종호',
      url: 'daraekita',
    },
  ];
  const frontEndUrl = 'https://github.com/pjAcorn/acorn-omakase-front';

  const Members2 = [
    {
      id: 1,
      name: '정지우',
      url: 'DreamJJW',
    },
    {
      id: 2,
      name: '강성진',
      url: 'sungjinkang1',
    },
    {
      id: 3,
      name: '김혜진',
      url: 'rla77gpwls',
    },
  ];
  const backEndUrl = 'https://github.com/pjAcorn/acorn-omakase-back';

const Footer = () => {
    return (
        <nav className={styles.Footer}>
            <div className={styles.Footer__items}>
                <div className={styles.Footer__items__logo}>
                 <SymbolTextLogo $filter width='142px' height='142px' />
                </div>
                <IntroTeam title='Member' members={Members} url={frontEndUrl} />
                <IntroTeam title='' members={Members2} url={backEndUrl} />
            </div>
        </nav>
    )
}

export default Footer;