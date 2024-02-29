import {
  Container,
  ProjectsContainer,
  SingleContainer,
} from '../Projects/ProjectsStyles';
import api from '../../service/Service';
import { useEffect } from 'react';
import { useState } from 'react';

const namesToDisplay = [
  'gm-dapp',
  'Instagram-post-app',
  'dashboard-app',
  'Ts-blog-app',
  'typescript-styledComponents-cypress-template',
  'finpayapp-react-native',
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await api.get('/repos');
    setProjects(
      response.data.filter((obj) =>
        namesToDisplay.some((name) => obj.name.includes(name))
      )
    );
    console.log(
      response.data.filter((obj) =>
        namesToDisplay.some((name) => obj.name.includes(name))
      )
    );
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container id='Projects'>
      <h2>Projects I've built</h2>

      <ProjectsContainer>
        {projects.map((project) => (
          <SingleContainer
            target='_blank'
            href={project.html_url}
            key={project.id}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>• {project.language}</p>
          </SingleContainer>
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
