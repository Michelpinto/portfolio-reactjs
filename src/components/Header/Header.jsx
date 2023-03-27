import { Nav, Div1, Navlink } from './HeaderStyles';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <Nav>
      <img
        onClick={() => window.location.replace('/')}
        src={Logo}
        alt='logo'
        style={{ width: '6rem', height: '6rem' }}
      />
      <Div1>
        <Navlink onClick={() => window.location.replace('/#Projects')}>
          Home
        </Navlink>

        <Navlink target='_blank' href='https://github.com/Michelpinto'>
          Github
        </Navlink>

        <Navlink target='_blank' href='mailto:michelpintodev@gmail.com'>
          Email
        </Navlink>
      </Div1>
    </Nav>
  );
};

export default Header;
