import { Container, SocialIcons, Icon, Div, Text } from './FooterStyles';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
  return (
    <Container id='Footer'>
      <Div>
        <Text>Building 👨🏾‍💻 2023 © Michel Pinto</Text>
        <SocialIcons>
          <Icon href='https://github.com/Michelpinto' target='_blank'>
            <IoLogoGithub />
          </Icon>
          <Icon
            href='https://www.linkedin.com/in/michel-pinto-78708b1b4/'
            target='_blank'
          >
            <IoLogoLinkedin />
          </Icon>
        </SocialIcons>
      </Div>
    </Container>
  );
};

export default Footer;
