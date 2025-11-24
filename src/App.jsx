import { Routes, Route } from 'react-router-dom';
import { usePortfolioData } from '../hooks';
import { useTheme, useToggle, useResponsive } from '../hooks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ExperienceTimeline from '../sections/ExperienceTimeline';
import CertificationGrid from '../sections/CertificationGrid';
import EducationSection from '../sections/EducationSection';
import ContactSection from '../sections/ContactSection';
import Resume from '../Resume';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const { data, loading, error, refetch } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, toggleMenu] = useToggle();
  const responsive = useResponsive();

  return (
    <ErrorBoundary onRetry={refetch}>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} menuOpen={menuOpen} toggleMenu={toggleMenu} profileName={data?.profile?.name} />
            <main>
              <HeroSection profile={data?.profile} links={data?.links} loading={loading} />
              <AboutSection about={data?.about} />
              <SkillsSection skills={data?.skills} />
              <ProjectsSection projects={data?.projects} />
              <ExperienceTimeline experience={data?.experience} />
              <CertificationGrid accomplishments={data?.accomplishments} certifications={data?.certifications} />
              <EducationSection education={data?.education} educationItems={data?.educationItems} />
              <ContactSection email={data?.links?.email} />
            </main>
            <Footer name={data?.profile?.name} />
          </>
        } />
        <Route path="/resume" element={<Resume theme={theme} />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
