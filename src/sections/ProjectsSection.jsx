import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';

const ProjectCard = ({ title, desc, stack, link }) => (
  <Card variant="bordered" hoverable className="project-card">
    <Typography variant="h4" color="primary">{title}</Typography>
    <Typography variant="body">{desc}</Typography>
    <Typography variant="caption" color="muted">{stack}</Typography>
    {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
  </Card>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stack: PropTypes.string,
  link: PropTypes.string,
};

const ProjectsSection = ({ projects = [] }) => (
  <Section id="projects" bgVariant="alternate" title="Projects">
    <div className="projects-grid">
      {projects.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </div>
  </Section>
);

ProjectsSection.propTypes = {
  projects: PropTypes.array,
};

export default ProjectsSection;
